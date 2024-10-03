from IPython.display import display 
import pandas as pd
import numpy as np
import h5py as hdf
from sklearn.linear_model import LinearRegression 
with hdf.File('data.HDF5', 'r') as f:
    data_keys = list(f.keys())
    data= f.get('Grid')
    dataset = data.get('precipitation')
    df=pd.DataFrame(np.array(dataset))
    
TrainSet=[]
TrainOp=[]
predictor = LinearRegression()
predictor.fit(X=TrainSet, y=TrainOp)
predictor.predict(X=[[]])