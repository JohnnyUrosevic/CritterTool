from bs4 import BeautifulSoup
from urllib.request import urlretrieve
from os.path import join

with open("fish.html") as fp:
    fish_soup = BeautifulSoup(fp, 'html5lib')
with open("bug.html") as fp:
    bug_soup = BeautifulSoup(fp, 'html5lib')

def scrape_table(table, fish, fp):
    for row in table.find_all('tr')[1:]:
        cells = row.find_all('td')
        name = cells[0].a.contents[0]
        imgurl = cells[1].a.get('href')
        imgdir = join("public","images","fish" if fish else "bug")
        urlretrieve(imgurl, join(imgdir, "".join(name.split()) + '.png'))
        
        data = '["' + name + '"'
        price = cells[2].contents[0].strip()
        data += ',' + (price if price != '?' else "0")
        data += ',' + '"' + cells[3].contents[0].strip() + '"'
        data += ',' + '"' + cells[4 + int(fish)].small.contents[0].strip() + '"'

        # months
        start = 5 + int(fish)
        months = []
        for i in range(start, len(cells)):
            if cells[i].contents[0].strip() == '✓':
                months.append(i - start + 1)

        data += ',' + str(months) + '],\n'
        fp.write(data)

fish_table = fish_soup.table.tr.td.table.tbody
bug_table = bug_soup.find_all('table')[2].td

with open('src/constants.js', 'w') as fp:
    fp.write("export const FISH = [\n")
    scrape_table(fish_table, True, fp)
    fp.write("]\n")

    fp.write("export const BUGS= [\n")
    scrape_table(bug_table, False, fp)
    fp.write("]\n")