---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching materials
nav: true
nav_order: 6
---

# Dauphine Tunis 2025-2026 - Generative AI

## 📚 Course Materials by Chapter
- **Chapter 1 - Prompting:** [Chapter 1 - Prompting](/assets/pdf/1%20-%20Prompt%20-%202025%20-%20Dauphine.pdf)
- **Chapter 2 - LLM Principles:** [Chapter 2 - LLM Principles](/assets/pdf/2%20-%20LLM%20-%20Dauphine%20-%202025%20-%202026.pdf)
- **Chapter 3 - RAG:** [Chapter 3 - RAG](/assets/pdf/3%20-%20RAG%20.pdf)
- **Chapter 4 - Agents:** [Chapter 4 - Agents](/assets/pdf/4%20-%20Agent.pdf)
- **Chapter 5 - Evaluation:** [Chapter 5 - Evaluation](/assets/pdf/5%20-%20Evaluation.pdf)

## 📖 Mandatory Readings

### 🎯 Fundamental Readings (Must Read)
- **Attention Is All You Need** ⭐⭐⭐ — Vaswani et al. (2017) - **3 hours study**:: [arXiv](https://arxiv.org/abs/1706.03762)
  - The foundational paper introducing Transformers, basis of all modern LLMs
- **BERT: Pre-training of Deep Bidirectional Transformers** ⭐⭐⭐ — Devlin et al. (2018) - **2 hours study**: [arXiv](https://arxiv.org/abs/1810.04805)
  - First massively pre-trained model that revolutionized NLP, introduced transfer learning and bidirectional context understanding
- **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs** ⭐⭐⭐ — DeepSeek-AI (2025) - **2 hours study**: [arXiv](https://arxiv.org/pdf/2501.12948)
  - Breakthrough in open-source reasoning models, matching OpenAI o1 performance

### 🎥  Must-Watch Visual Explanations
- **Building Large Language Models** — Stanford CS229 - **1.5 hours study**: [YouTube](https://www.youtube.com/watch?v=9vM4p9NN0Ts)
  - Stanford's comprehensive lecture on building LLMs from scratch, covering architecture, training, and deployment
- **The Illustrated Transformer** — Jay Alammar - **1 hour study**: [Blog](http://jalammar.github.io/illustrated-transformer/)
  - The best visual guide to understanding Transformers, step-by-step illustrations
- **Visual understandings of LLMs** — 3Blue1Brown - **2 hours study**: [YouTube Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
  - Beautiful visual explanations of neural networks and deep learning fundamentals
- **Attention Mechanism Visualized** — Jay Alammar - **1 hour study**: [Blog](http://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/)
  - Visual breakdown of attention mechanisms in sequence models

### 🎥 Must read / watch Resources
- **How Transformer LLMs Work** — DeepLearning.AI - **2 hours study**: [Course](https://www.deeplearning.ai/short-courses/how-transformer-llms-work/)
  - Comprehensive course on Transformer architecture and LLM fundamentals
- **The Illustrated GPT-2** — Jay Alammar - **30 mins study**: [Blog](http://jalammar.github.io/illustrated-gpt2/)
  - Visual explanation of GPT architecture and training
- **Andrej Karpathy's Neural Network Lectures** — **2 hours study**: [YouTube](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - Building GPT from scratch, excellent for understanding fundamentals


## 💻 Code Repository
- **GitHub Repository:** [Langchain-Langgraph-courses](https://github.com/BastinFlorian/Langchain-Langgraph-courses) - All course notebooks and exercises

## 📚 Notebooks Google Colab

| #                          | Title                     | Key topics                                                                                   | Lien Google Colab                                                                                                                                       |
| -------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LANGCHAIN FUNDAMENTALS** |                           |                                                                                                 |                                                                                                                                                         |
| 1                          | First LLM Call            | API setup, ChatGoogleGenerativeAI, invoke(), temperature, max_tokens, model comparison          | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1JnCNalb0J3kxROKjmYPlojVxILMzXER9) |
| 2                          | Prompt Templates          | PromptTemplate, ChatPromptTemplate, input variables, template formatting, system/human messages | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/12j1Y1wtBInrXzz4mwSq40SEF931rj7sY) |
| 3                          | Message Types             | HumanMessage, AIMessage, SystemMessage, message roles, conversation structure                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/19w2vm7Keed24Mte6xOWLiu5hZc60ds69) |
| 4                          | Structured Outputs        | Pydantic models, BaseModel, type validation, structured data extraction, JSON parsing           | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/17KUIgiIc04KXFt-XWM8pcE53a6HwqcLF) |
| 5                          | Simple Chains             | LCEL (pipe operator), chain composition, RunnablePassthrough, data flow                         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1FuDhRp0csZfutFb4c9a7OjKayJdeN8ai) |
| 6                          | Multimodal Inputs         | Image processing, base64 encoding, vision models, multimodal prompts                            | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1oYa0xWELAZ2ip3cD24OFxU3ORMQ_da1L) |
| 7                          | Streaming Responses       | Real-time streaming, AIMessageChunk, chunk aggregation, streaming chains                        | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1qlb2fKoc3uwrCnQgZ6mnZbsqurroatXN) |
| **LANGGRAPH FUNDAMENTALS** |                           |                                                                                                 |                                                                                                                                                         |
| 1                          | LangGraph Basics          | StateGraph, TypedDict, nodes, edges, conditional routing, state persistence                     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1xdA5_zYkXWcwze2PMIb-yJuMoWRXAS3-) |
| 2                          | Tool Calling              | Tool definitions, function calling, StructuredTool, tool integration, parameter validation      | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1Dh0wzVdkCvbHfgYTxxMK1kkmeZ9uisGg) |
| 3                          | ReAct Prebuilt Agent      | ReAct pattern, create_react_agent, agent executor, reasoning and acting, tool selection         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1ZTe4El5fgTs6ExzE5qRj9nP-AQdO4-9_) |
| 4                          | Langfuse Callback Handler | Observability, tracing, callback handlers, monitoring, performance tracking                     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1gkkSirDi3E_I6ojuEKnHiLaTTaOA7S42) |


---

# Dauphine Tunis 2024-2025

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
