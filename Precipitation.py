from IPython.display import display 
import pandas as pd
import numpy as np
import h5py as hdf
from sklearn.linear_model import LinearRegression 
import requests as rq
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup as bs

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
for i in linkOfDays:
    dirc= i.text
    urlhdf= url + dirc
    l= rq.get(urlhdf ,auth=HTTPBasicAuth(username,pswd))
    page= bs(l.text, 'html.parser')
    Table= page.body.table
    dataPerDay.append(Table)
#         dataOfday = page.find_all('tr')[3:-1]
#         dataPerDay.append(dataOfday)
print('done')
        
# TrainSet=[]
# TrainOp=[]
# predictor = LinearRegression()
# predictor.fit(X=TrainSet, y=TrainOp)
# predictor.predict(X=[[]])