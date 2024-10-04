from IPython.display import display 
import pandas as pd
import numpy as np
import h5py as hdf
from sklearn.linear_model import LinearRegression 
import requests as rq
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup as bs
import os
import pathlib as pl

#API QUERY
url="https://arthurhouhttps.pps.eosdis.nasa.gov/trmmdata/ByDate/V07/2019/01/"
username="duttdigvijay@gmail.com"
pswd="duttdigvijay@gmail.com"

#Web Scraping Data & Data Preprocessing
data1 = rq.get(url, auth=HTTPBasicAuth(username,pswd))
data2 = bs(data1.text, 'html.parser')
listOfDays = data2.body.table
linkOfDays = listOfDays.find_all('a')[5:]
dataPerDay = []
opName = "2019"
os.makedirs(opName, exist_ok=True)
for i in linkOfDays:
    dirc= i.text
    path = os.path.join(opName,dirc)
    os.makedirs(path ,exist_ok=True)
    urlhdf= url + dirc
    l= rq.get(urlhdf ,auth=HTTPBasicAuth(username,pswd))
    page= bs(l.text, 'html.parser')
    Table= page.body.table
    linkPerDay= Table.find_all('a', href=lambda href: href and href.endswith('.HDF5'))[5:]
    dataPerDay.append(linkPerDay)

myfile= pl.Path("2019/01/01/3B42.20190101.15.7.HDF5")
if myfile.is_file():
    for j in dataPerDay:
        for k in j:
            fileN = k["href"]
            for m in linkOfDays:
                fileurl = url + m.text + "/" + fileN
                hdfile = rq.get(fileurl)
                with open(f"2019/{m.text}/{fileN}", 'wb') as f:
                    f.write(hdfile.content)


# for j in dataPerDay:
#     fileurl = j['href']

# dataPerDayFinal = dataPerDay
# j=0
# while j!=(len(dataPerDay)-1):
#     k=0
#     while k!=(len(dataPerDay[j])):
#         # hdf5_link = dataPerDay.find('a', href=lambda href: href and '.hdf5' in href)['href']
#         # m=0
#         # while m!=(len(dataPerDay[j][k].text)):
#         #     if dataPerDay[j][k].text[-5:] != 'HDF5' :
#         #             dataPerDayFinal.remove(dataPerDay[j][k])
#         #     m=m+1
#         k=k+1
#     j=j+1

# print(dataPerDay[0][0]["href"])
# TrainSet=[]
# TrainOp=[]
# predictor = LinearRegression()
# predictor.fit(X=TrainSet, y=TrainOp)
# predictor.predict(X=[[]])