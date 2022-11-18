import pokebase as pb
#todo???
#from pokebase import *

#from pokebase import cache
#cache.API_CACHE

#easy way to list all the stuff we want!!
def list_attributes(tpkm):
    #tbh I want tpkm to be a string
    pkm = pb.pokemon(tpkm)
    print("name: " + pkm.name)
    #print("abilities: " + str(pkm.abilities[0][0]))
    #todo figure out how this works!! ^


charmander = pb.pokemon('charmander')  # Quick lookup.
print("charmander height: " + str(charmander.height))
print("\n")


list_attributes('piplup')
