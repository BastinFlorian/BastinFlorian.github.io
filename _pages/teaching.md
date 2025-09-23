---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching materials
nav: true
nav_order: 6
---

# Dauphine Tunis 2025

## Generative AI

- **Course Materials (2025):** [Gen AI - Dauphine Tunis.pdf](/assets/pdf/Gen%20AI%20-%20Dauphine%20Tunis.pdf)
- **Git Exercises Repository:** [GenAI-Dauphine-Course](https://github.com/BastinFlorian/GenAI-Dauphine-Course)
- **Podcast Spotify Playlist:** [GenAI Podcast](https://open.spotify.com/show/4Y7k3SpY00R7w0O0CfuGol)
- **Quizzes Page:** [GenAI Quiz](https://bastinflorian.github.io/blog/2024/genai-quiz/)

---

## AI with GCP

- **Git Exercises Repository:** [GenAI-GCP](https://github.com/BastinFlorian/GenAI-GCP)

---

## Projects: Medical GCP Chatbot
You are tasked with creating a technical chatbot capable of answering specific questions in the medical field.

**Available Data:**

- [Data](https://www.kaggle.com/datasets/jpmiller/layoutlm/data)

**Evaluation Criteria:**

1.	**Streamlit Interface:**
- Create a Streamlit interface that answers questions based on the dataset.

2.	**Cloud SQL:**
- Set up a table in Cloud SQL.
- Create a chatbot interface using Streamlit or Gradio.

3.	**Exact Answers:**
- Formulate the precise “answer” for each “question.”

4.	**Source Display:**
- Display the sources used to answer the question. For each source:
- Ensure the “source” and “focus_area” elements are present and correctly stored in Cloud SQL.
- Include the similarity score and its type.

5.	**Code Quality:**
- Develop a Git repository containing your code, a README file, and a requirements file.
- Adhere to coding conventions and best practices (tools like Flake8, PyLint, or Autopep8 can assist).

6.	**Deployment:**
- Deploy the Streamlit application on Cloud Run using the project name ‘initials-project.’

7.	**Evaluation:**
- Select evaluation metrics.
- Create an eval.py script that allows testing of your chatbot by running the command python eval.py. The evaluation should be conducted on 10 random examples from the dataset.

8.	**Model Card:**
- Ensure the quality of your model card.

9.	**Bonus: Creativity:**
- The problem itself is not overly complex from an AI perspective (though it may be challenging in terms of development and deployment, given your background). You are free to explore one or more of the following to add complexity to the project:
- Explore agents and use LangGraph.
- Use an open-source solution like LangFuse to monitor LLM calls.
- Collect feedback and create a dashboard or satisfaction histogram.
- Investigate fine-tuning while accounting for cost metrics.
- Incorporate multimodality, such as displaying descriptive images for questions.
- Refine prompts to focus on a specific language.

**Specific Note:**

- Students wishing to work on a more complex solution with additional data can achieve the highest grade without necessarily meeting all criteria.
- Students focusing exclusively on criteria 1 through 7 can achieve the highest grade if all seven criteria are rigorously met.
- Separate grades will be given for Generative AI functionality and cloud features based on their complexity.

**Submission:**

- Deadline: Please submit your project by January 15th via a GitHub link, including the model card in the README.
- Presentation: A 15-minute demonstration of your solution via screen sharing will take place on January 25th. During the session, I will ask about your solution choices and reasoning. If you cannot attend on January 25th, please notify me as soon as possible with a valid reason so we can arrange another time.

----

## Grading

**AI on the Cloud:**

- 40% of the grade is based on the lab reports and the performance of your chatbot from Lab 4.
- 60% of the grade is based on the final project.

**Generative AI:**

- 20% of the grade is based on the lab reports and the performance of your chatbot from Lab 4.
- 30% of the grade is based on quiz results.
- 50% of the grade is based on the final project.

**Grading Criteria for Generative AI:**
- The quality of reasoning and model choices.
- The performance of your solution.
- The rigor of evaluation.
- The quality of your presentation.

**Grading Criteria for AI on the Cloud:**

- Thoughtful use of Cloud tools.
- Hosting your project on your own GitHub.
- Adherence to PEP8 best practices (Flake8, PyLint, Black, etc.).
- Good practices for commits and pull requests.

Regarding the project content, feel free to submit your proposals based on your professionalization goals or internship themes. These proposals can focus on the generation of images, text, video, or sound.