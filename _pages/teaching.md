---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching materials
nav: true
nav_order: 6
---

# 📚 Dauphine Tunis 2025-2026 - Generative AI

## 📚 Course Materials by Chapter
The courses slides have been sent by email with the following object "Generative AI - Slides de cours".

## 📖 Mandatory Learning Path (Follow in Order)

| # | Resource | Author/Source | Study Time | Link | Description |
|---|----------|---------------|------------|------|-------------|
| 1 | **Visual Understanding of LLMs** | 3Blue1Brown | 2 hours | [YouTube Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | Beautiful visual explanations of neural networks and deep learning fundamentals |
| 2 | **Building Large Language Models** | Stanford CS229 | 1.5 hours | [YouTube](https://www.youtube.com/watch?v=9vM4p9NN0Ts) | Stanford's comprehensive lecture on building LLMs from scratch |
| 3 | **How Transformer LLMs Work** | DeepLearning.AI | 2 hours | [Course](https://www.deeplearning.ai/short-courses/how-transformer-llms-work/) | Comprehensive course on Transformer architecture and LLM fundamentals |
| 4 | **Andrej Karpathy's Neural Network Lectures** | Andrej Karpathy | 2 hours | [YouTube](https://www.youtube.com/watch?v=kCc8FmEb1nY) | Building GPT from scratch, excellent for understanding fundamentals |
| 5 | **The Illustrated Transformer** | Jay Alammar | 1 hour | [Blog](http://jalammar.github.io/illustrated-transformer/) | The best visual guide to understanding Transformers, step-by-step |
| 6 | **Attention Mechanism Visualized** | Jay Alammar | 1 hour | [Blog](http://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/) | Visual breakdown of attention mechanisms in sequence models |
| 7 | **Attention Is All You Need** | Vaswani et al. | 3 hours | [arXiv](https://arxiv.org/abs/1706.03762) | The foundational paper introducing Transformers, basis of all modern LLMs |
| 8 | **BERT: Pre-training of Deep Bidirectional Transformers**  | Devlin et al. | 2 hours | [arXiv](https://arxiv.org/abs/1810.04805) | First massively pre-trained model that revolutionized NLP, introduced transfer learning |
| 9 | **The Illustrated GPT-2** | Jay Alammar | 30 mins | [Blog](http://jalammar.github.io/illustrated-gpt2/) | Visual explanation of GPT architecture and training |
| 10 | **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs** | DeepSeek-AI | 2 hours | [arXiv](https://arxiv.org/pdf/2501.12948) | Breakthrough in open-source reasoning models, matching OpenAI o1 performance |

**Total Study Time: ~16.5 hours**


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

# 📚 Dauphine Tunis 2024-2025 (Archive)


### 📖 Course Materials
- **📄 Complete Course Materials:** [Gen AI - Dauphine Tunis.pdf](/assets/pdf/Gen%20AI%20-%20Dauphine%20Tunis.pdf)
- **💻 Practical Exercises:** [GenAI-Dauphine-Course](https://github.com/BastinFlorian/GenAI-Dauphine-Course)
- **🎧 Educational Podcast:** [GenAI Podcast](https://open.spotify.com/show/4Y7k3SpY00R7w0O0CfuGol)
- **📝 Interactive Quizzes:** [GenAI Quiz](https://bastinflorian.github.io/blog/2024/genai-quiz/)

### ☁️ AI with Google Cloud Platform
- **🔧 Cloud Exercises Repository:** [GenAI-GCP](https://github.com/BastinFlorian/GenAI-GCP)


### 🎯 Final Project & Grading (2024-2025)


**📋 Project Overview:**
Create a technical chatbot for answering medical field questions using cloud technologies.

**📊 Available Dataset:**
- **Data Source:** [Kaggle LayoutLM Dataset](https://www.kaggle.com/datasets/jpmiller/layoutlm/data)

#### ✅ Core Requirements (1-7)

| # | Component | Description |
|---|-----------|-------------|
| 1 | **🖥️ Streamlit Interface** | Interactive web interface for question-answering |
| 2 | **☁️ Cloud SQL Setup** | Database integration with Streamlit/Gradio interface |
| 3 | **💬 Exact Answers** | Precise answer generation for each question |
| 4 | **📚 Source Display** | Show sources with similarity scores and focus areas |
| 5 | **💻 Code Quality** | GitHub repo with README, requirements, and best practices |
| 6 | **🚀 Deployment** | Cloud Run deployment with project naming convention |
| 7 | **📈 Evaluation** | Metrics selection and eval.py script for testing |

#### 🏆 Additional Requirements
- **📋 Model Card:** Comprehensive documentation of your solution
- **🎨 Bonus Creativity:** LangGraph agents, LangFuse monitoring, feedback dashboards, fine-tuning, multimodality

#### 📅 Submission Details
- **📆 Deadline:** January 15th (GitHub link + model card)
- **🎤 Presentation:** January 25th (15 min demo + Q&A)

#### 🤖 Generative AI Course
- **📝 Lab Reports + Lab 4:** 20%
- **🧠 Quiz Results:** 30%
- **🎯 Final Project:** 50%

#### ☁️ AI on the Cloud Course
- **📝 Lab Reports + Lab 4:** 40%
- **🎯 Final Project:** 60%

#### 🎯 Evaluation Criteria

**For Generative AI:**
- ✨ Quality of reasoning and model choices
- 🚀 Performance of your solution
- 🔬 Rigor of evaluation
- 🎤 Quality of presentation

**For AI on the Cloud:**
- ☁️ Thoughtful use of Cloud tools
- 📁 Professional GitHub repository
- 📏 PEP8 compliance (Flake8, PyLint, Black)
- 🔄 Good Git practices (commits, PRs)
