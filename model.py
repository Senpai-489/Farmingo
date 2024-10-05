import h5py as hdf
import os
import numpy as np
import tensorflow as tf
from keras import layers, models
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
def load_hdf5_file(file_path):
    with hdf.File(file_path, 'r') as f:
        dataset_key = 'Grid'
        if dataset_key in f:  
            data = f[dataset_key][:]
            return data
        
def process_multiple_hdf5_files(directory, dataset_key):
    all_data = []
    for root, dirs, files in os.walk(directory):
        for fil in files:
            if fil.endswith('.HDF5'):
                file_path = os.path.join(root, dirs, fil)
                print(f"Processing file: {file_path}")
                data = load_hdf5_file(file_path, dataset_key)
                if data is not None:
                    all_data.append(data)
    
    return all_data

directory_path = '2019'
dataset_key = 'Grid'
alldata = process_multiple_hdf5_files(directory_path, dataset_key)

X = np.array(alldata['Grid'])
y = np.array(alldata['Grid/precipitation'])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

model = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    layers.Dense(32, activation='relu'),
    layers.Dense(1) 
])

model.compile(optimizer='adam', loss='mse', metrics=['mae'])

history = model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

loss, mae = model.evaluate(X_test, y_test)
print(f"Test MAE: {mae}")

predictions = model.predict(X_test)
print(predictions)