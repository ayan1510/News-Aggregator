from fastapi import FastAPI, Request
from recommender import get_recommendations

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI service running!"}

@app.post("/recommend")
async def recommend(request: Request):
    data = await request.json()
    user_id = data.get("user_id")
    recommendations = get_recommendations(user_id)
    return {"recommendations": recommendations}
