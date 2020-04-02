from bs4 import BeautifulSoup
from urllib.request import urlretrieve
from os.path import join

with open("fish.html") as fp:
    fish_soup = BeautifulSoup(fp, 'html5lib')
with open("bug.html") as fp:
    bug_soup = BeautifulSoup(fp, 'html5lib')

def scrape_table(table, imgdir):
    for row in table.find_all('tr')[1:]:
        cells = row.find_all('td')
        name = cells[0].a.contents[0]
        imgurl = cells[1].a.get('href')
        urlretrieve(imgurl, join(imgdir, "".join(name.split()) + '.png'))

fish_table = fish_soup.table.tr.td.table.tbody
bug_table = bug_soup.find_all('table')[2].td
scrape_table(fish_table, join("images","fish"))
scrape_table(bug_table, join("images","bug"))