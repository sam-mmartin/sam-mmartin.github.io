#importa a funcao de acessar e ler o html da pagina
from urllib.request import urlopen
import json

#salva os dados raspados num arquivo json
def escrever_json(dados):
    with open('estatisticas.json','w') as file:
        json.dump(dados, file)

url = "https://soundcloud.com/samuel-meireles-martins"
pagina = urlopen(url)
texto = pagina.read().decode('utf8')

#remove os espacamentos da tecla TAB
texto = texto.replace("\t", "")

#remove a quebra de linha
lista = texto.split("<")

track = ""
followers = ""
estatisticas = []

encontrar = 'meta property="al:web:should_fallback" content="false">'

contador = 0

while contador < len(lista):
    if lista[contador] == encontrar:
        track = lista[contador + 1]
        followers = lista[contador + 2]
    contador += 1

listaTrack = track.split(" ")
listaFollowers = followers.split(" ")

for item in listaTrack:
    contador = 0
    while contador < len(item):
        if item[contador] == "=":
            track = item[contador+2] + item[contador+3]
        contador += 1

for item in listaFollowers:
    contador = 0
    while contador < len(item):
        if item[contador] == "=":
            followers = item[contador+2] + item[contador+3]
        contador += 1

print('Faixas: ', track)
print('Seguidores: ', followers)

estatisticas.append(track)
estatisticas.append(followers)

escrever_json(estatisticas)