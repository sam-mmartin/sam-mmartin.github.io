from urllib.request import urlopen

url = "http://blog.conradosaud.com.br/exemplos/scrapingSimples.html"
pagina = urlopen(url)
texto = pagina.read().decode('utf-8')
#Remove os espaçamentps da tecla TAB
texto = texto.replace("\t", "")
#remove a quebra de linha
lista = texto.split("\n")
#variaveis globais para criar CSV
nomeProduto = ""
nomeMarca = ""
precoVista = ""
precoParcelado = ""
csv = []
#padrão para encontrar o nome do produto
htmlNomeProduto1 = '<div class="row">'
htmlNomeProduto2 = '<p class="lead">'
#padrão para encontrar o nome da marca
htmlInicioMarca = '<p><strong>'
htmlFimMarca = '</strong></p>'
#padrão para encontrar os preços
htmlVista = 'precoVista">'
htmlParcelado = 'precoParcelado">'

contador = 0

while contador < len(lista):
    #Encontra nome do produto
    if lista[contador] == htmlNomeProduto1:
        if lista[contador+1].startswith(htmlNomeProduto2):
            nEncontrado1 = 1 + (lista[contador+1].index(">"))
            nEncontrado2 = lista[contador+1].index("</p>")
            nomeProduto = lista[contador+1][nEncontrado1:nEncontrado2]
            #print(nomeProduto)
    #Encontra nome da marca
    if lista[contador].startswith(htmlInicioMarca):
        nEncontrado1 = len(htmlInicioMarca) + (lista[contador].index(htmlInicioMarca))
        nEncontrado2 = lista[contador].index(htmlFimMarca)
        nomeMarca = lista[contador][nEncontrado1:nEncontrado2]
        #print(nomeMarca)
    #Encontra os preços
    if lista[contador].find(htmlVista) != -1:
        #preco a vista
        nEncontrado1 = len(htmlVista) + (lista[contador].find(htmlVista))
        nEncontrado2 = 0
        contadorAux = nEncontrado1
        while(contadorAux < len(lista[contador])):
            if(lista[contador][contadorAux:contadorAux+1] == "<"):
                nEncontrado2 = contadorAux
                break
            contadorAux += 1
        precoVista = lista[contador][nEncontrado1:nEncontrado2]
        #print(precoVista)
        #preco Parcelado
        nEncontrado1 = len(htmlParcelado) + (lista[contador].find(htmlParcelado))
        nEncontrado2 = 0
        contadorAux = nEncontrado1
        while(contadorAux < len(lista[contador])):
            if(lista[contador][contadorAux:contadorAux+1] == "<"):
                nEncontrado2 = contadorAux
                break
            contadorAux += 1

        precoParcelado = lista[contador][nEncontrado1:nEncontrado2]
        #print(precoParcelado)
        #verifica se todas as variaveis foram preenchidas
        if len(nomeProduto) > 1 and len(nomeMarca) > 1 and len(precoVista) > 1 and len(precoParcelado) > 1:
            csvAux = nomeProduto + ";" + nomeMarca + ";" + precoVista + ";" + precoParcelado + ";"
            csv.append(csvAux)
            #zera variaveis para validar proxima verificação
            nomeProduto = ""
            nomeMarca = ""
            precoVista = ""
            precoParcelado = ""

    contador += 1

with open('dados.txt', 'w') as file:
    for item in csv:
        file.write(item + "\n")
    

