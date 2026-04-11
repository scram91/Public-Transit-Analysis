import time
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/main/time")
def get_current_time():
      return JSONResponse(content={"time": time.time()})