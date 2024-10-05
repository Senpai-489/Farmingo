from IPython.display import display 
import h5py as hdf
import requests as rq
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup as bs
import os
import numpy as np

#API QUERY
url="https://arthurhouhttps.pps.eosdis.nasa.gov/trmmdata/ByDate/V07/2019/01/"
uname="duttdigvijay@gmail.com"
pswd="duttdigvijay@gmail.com"

#Web Scraping Data & Data Preprocessing
data1 = rq.get(url ,auth=HTTPBasicAuth(username=uname, password=pswd ))
data2 = bs(data1.text, 'html.parser')
listOfDays = data2.body.table
linkOfDays = listOfDays.find_all('a')[5:]
dataPerDay = []
opName = "2019"
os.makedirs(opName, exist_ok=True)
if(len(dataPerDay)<1):
    for i in linkOfDays:
        dirc= i.text
        path = os.path.join(opName,dirc)
        os.makedirs(path ,exist_ok=True)
        urlhdf= url + dirc
        l= rq.get(urlhdf , auth=HTTPBasicAuth(username=uname, password=pswd ))
        page= bs(l.text, 'html.parser')
        Table= page.body.table
        linkPerDay= Table.find_all('a', href=lambda href: href and href.endswith('.HDF5'))[5:]
        dataPerDay.append(linkPerDay)

print('1')

# if (myfile.is_file() == False):
for j in dataPerDay:
    for k in j:
        fileN = k["href"]
        for m in linkOfDays:
            fileurl = url + m.text + "/" + fileN
            hdfile = rq.get(fileurl, auth=HTTPBasicAuth(username=uname, password=pswd ))
            if hdfile.status_code == 200:
                with open(f"2019/{m.text}/{fileN}", 'wb') as f:
                    f.write(hdfile.content)

print('2')



    