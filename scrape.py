from bs4 import BeautifulSoup
from urllib.request import urlretrieve
from os.path import join

with open("fish.html") as fp:
    soup = BeautifulSoup(fp, 'html5lib')

table = soup.table.tr.td.table.tbody

for row in table.find_all('tr')[1:]:
    cells = row.find_all('td')
    name = cells[0].a.contents[0]
    imgurl = cells[1].a.get('href')
    urlretrieve(imgurl, join("images", "".join(name.split()) + '.png'))
