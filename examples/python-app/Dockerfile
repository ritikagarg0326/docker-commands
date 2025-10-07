# 1️⃣ Use a small official Python image
FROM python:3.10-alpine

# 2️⃣ Set working directory inside the container
WORKDIR /app

# 3️⃣ Copy the dependency list and install Flask

RUN pip install flask

# 4️⃣ Copy your app code into the container
COPY . .

# 5️⃣ Expose port 8080
EXPOSE 8080

# 6️⃣ Start the app
CMD ["python", "app.py"]
