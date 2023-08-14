#!/usr/local/bin/python3

import gene
import mysql.connector
import cgi, cgitb
import re
import jinja2

# This line tells the template loader where to search for template files
templateLoader = jinja2.FileSystemLoader( searchpath="./templates" )

# This creates your environment and loads a specific template
env = jinja2.Environment(loader=templateLoader)
template = env.get_template('final.html')

# This obtains the value entered in the form by the user
form = cgi.FieldStorage()
acc = form.getfirst('gene')
if form.getvalue('typeOfOrg'):
   acc_o = form.getvalue('typeOfOrg')
else:
   acc_o = "Not entered"
acc_g = form.getvalue('goClass')

# This method executes the SELECT query used to obtain gene products in the bpoblet1_final database table gene_info  that contains the search term for the entered gene/geneproduct and organism
def searchGenes(acc_v,acc_f,org):
    try:
        conn = mysql.connector.connect(user='bpoblet1', password='DanteBoy@9034',host='localhost', database='bpoblet1_final')
        curs = conn.cursor(buffered=True)
        qry = "SELECT gene_product_symbol, gene_product_name, organism, GO_class  FROM gene_info WHERE (gene_product_name LIKE %s OR GO_class LIKE %s)  AND organism = %s"
        curs.execute(qry,("%{}%".format(acc_v),"%{}%".format(acc_v),acc_o))
        myresult = curs.fetchall()
        return myresult
        curs.close()
    except conn.Error:
        print("Connection failed!")
        myresult = list()
        return myresult

# This method executes the SELECT query used to obtain gene products in the bpoblet1_final database table annotation that contains the search term for the selected GO class  and organism
def searchAnnotation(acc_o, acc_g):
    try:
        conn = mysql.connector.connect(user='bpoblet1', password='DanteBoy@9034',host='localhost', database='bpoblet1_final')
        curs = conn.cursor(buffered=True)
        qry = "SELECT gene_product_symbol, gene_product_name, organism, GO_class FROM annotation WHERE organism = %s AND GO_class = %s"
        curs.execute(qry,(acc_o,acc_g))
        myresult = curs.fetchall()
        return myresult
        curs.close()
    except conn.Error:
        print("Connection failed!")
        return myresult

# Executing the searchGenes and searchAnnotation methods with the inputs  entered
if __name__ == '__main__':
    result_list=searchGenes(acc,acc,acc_o)
    ann_list=searchAnnotation(acc_o,acc_g)
    print("Content-Type: text/html\n\n")

# Gathering data for Table 1 (searchGenes)
gene_product_symbol_list = []
gene_product_symbol_list = [item[0] for item in result_list]

gene_product_name_list = []
gene_product_name_list = [item[1] for item in result_list]

organism_list = []
organism_list = [item[2] for item in result_list]

go_class_list = []
go_class_list = [item[3] for item in result_list]

# Gathering data for Table 2 (searchAnnotation)
gene_product_symbol_list_ann = []
gene_product_symbol_list_ann = [item[0] for item in ann_list]

gene_product_name_list_ann = []
gene_product_name_list_ann = [item[1] for item in ann_list]

organism_list_ann = []
organism_list_ann = [item[2] for item in ann_list]

go_class_list_ann = []
go_class_list_ann = [item[3] for item in ann_list]

finalList = list()
for i in range(len(gene_product_name_list)):
    elemAdd = gene.gene(gene_product_symbol_list[i], gene_product_name_list[i], organism_list[i], go_class_list[i])
    finalList.append(elemAdd)

finalListAnn = list()
for i in range(len(gene_product_name_list_ann)):
    elemAdd = gene.gene(gene_product_symbol_list_ann[i], gene_product_name_list_ann[i], organism_list_ann[i], go_class_list_ann[i])
    finalListAnn.append(elemAdd)

# Rendering the SELECT query results in table form for both queries searchGenes and searchAnnotation  
print(template.render(fastaInfo=finalList,annInfo=finalListAnn, organism=acc_o, geneP=acc, go_c=acc_g))
