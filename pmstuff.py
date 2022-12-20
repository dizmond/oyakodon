import pokebase as pb
#todo???
#from pokebase import *

#from pokebase import cache
#cache.API_CACHE

#image stuff
from PIL import Image
import urllib.request
#PIL.ImageFile.


#easy way to list all the stuff we want!!
def hecto_to_lb(hec):
    return int(round(hec / 4.5359237,0))

def decimetres_to_american(decimetres):
    total_num_inches = int(round(decimetres * 3.93700787402,0))
    extra_inches = total_num_inches % 12
    num_feet = int(round((total_num_inches - extra_inches) / 12))
    return(str(num_feet)+"\'"+str(extra_inches)+"\"")

def list_attributes(tpkm):
    #tbh I want tpkm to be a string
    pkm = pb.pokemon(tpkm)
    print("name: " + pkm.name)
    print("abilities: ")
    num_abilities = len(pkm.abilities)
    for i in range(0,num_abilities,1):
        print(pkm.abilities[i].ability.name)
        #print(pkm.abilities[i].ability.name)
    print("height: " + str(decimetres_to_american(pkm.height)))
    print("weight: " + str(hecto_to_lb(pkm.weight)))
    num_types = len(pkm.types)
    print("types:")
    for i in range(0,num_types,1):
        print(pkm.types[i].type.name)
    #past types??
    #todo REIGONAL VARIANTS?????
    #todo sprites???
    zurl = pkm.sprites.front_default
    #print("URL!!! " +zurl)
    #with urllib.request.urlopen(zurl) as url:
        #img = Image.open(url)
        #img.show()

    print("\n")





#charmander = pb.pokemon('charmander')  # Quick lookup.
#print("charmander height: " + str(charmander.height))
#print("\n")

list_attributes('treecko')
list_attributes('empoleon')
list_attributes('rattata')