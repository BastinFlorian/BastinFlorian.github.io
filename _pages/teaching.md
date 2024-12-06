---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching materials
nav: true
nav_order: 6
---

# Dauphine Tunis 2024-2025

## Generative AI

- The Git exercices repository is available [here](https://github.com/BastinFlorian/GenAI-Dauphine-Course)
- The Podcast Spotify playlist is avalailable [here](https://open.spotify.com/show/4Y7k3SpY00R7w0O0CfuGol)
- The quizzes page is available [here](https://bastinflorian.github.io/blog/2024/genai-quiz/) and will be updated after each course
- The courses & solutions will be updated after each session:

| Session | Date | Course Name | Slides | Exercices | Solutions |
|---------|------|--------|--------|-------|------------------- |
| 1       | 2024-10-23 | Building Large Language Models | [slides](/assets/pdf/1-GENAI.pdf) | [TP 1](https://github.com/BastinFlorian/GenAI-Dauphine-Course/blob/main/exercices/1_transformers.ipynb) | solution
| 2       | 2024-10-24 | Transformers Architecture | [slides](/assets/pdf/2-GENAI.pdf) |  [TP 2](https://github.com/BastinFlorian/GenAI-Dauphine-Course/blob/main/exercices/2_attention.ipynb) | solution
| 3       | 2024-10-25 | Retrieval Augmented Generation | [slides](/assets/pdf/3-GENAI.pdf) | [TP 3](https://github.com/BastinFlorian/GenAI-Dauphine-Course/blob/main/exercices/3_basic_rag.ipynb)  | solution
| 4       | 2024-12-06 | Beyond LLM, Agent & Tools | [slides](/assets/pdf/4-GENAI.pdf) | TP 4  | solution


---

## AI with GCP

- The Git exercice repository is available [here](https://github.com/BastinFlorian/GenAI-GCP)
- The courses & solutions will be updated after each session:


| Session | Date | Course Name | Slides | Exercices | Solutions |
|---------|------|--------|--------|-------|------------------- |
| 1       | 2024-10-23 | Introduction to GCP | [slides](/assets/pdf/1-GCP.pdf)| [TP 1](https://github.com/BastinFlorian/GenAI-GCP/tree/main/exercices/tp_1) | solution
| 2       | 2024-10-24 | Databases | [slides](/assets/pdf/2-GCP.pdf) | [TP 2](https://github.com/BastinFlorian/GenAI-GCP/tree/main/exercices/tp_2) | solution
| 3       | 2024-10-25 | Application deployment | [slides](/assets/pdf/3-GCP.pdf)  | [TP 3](https://github.com/BastinFlorian/GenAI-GCP/tree/main/exercices/tp_3) | solution
| 4       | 2024-10-26 | Multimodal RAG | slides | [TP 4](https://www.cloudskillsboost.google/focuses/87625?catalog_rank=%7B%22rank%22%3A3%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=40062814) |
| 5       | 2024-10-26 | Agent Builder | slides | [TP 5](https://www.cloudskillsboost.google/focuses/95417?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=39997823) |

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