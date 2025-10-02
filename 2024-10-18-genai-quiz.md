---
layout: post
title: Generative AI Quiz
date: 2024-10-18 10:14:00-0400
description: Generative AI Quiz for Dauphine Tunis students
tags: GenAI Quiz Dauphine-Tunis Teaching
categories: Teaching
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

## Quiz 1 - Building Large Language Models
### Questions

Question 1: **What does LLM mean?**

- A) Linguistic Laugh Machine
- B) Legendary Lemonade Maker
- C) Large Language Model
- D) Levitating Lawn Mower

Question 2: **What is tokenization?**

- A) The process of encrypting text data for security purposes.
- B) The method of assigning numerical frequency values to words.
- C) The process of breaking down text into individual units called tokens.
- D) The technique of summarizing large texts into key points.

Question 3: **Which metric is commonly used to evaluate the performance of a language model?**

- A) Accuracy Score
- B) Perplexity
- C) Recall Rate
- D) F1 Score

Question 4: **How are language models generally trained?**

- A) By manually programming grammar rules into the system.
- B) By feeding the model a vast set of text data to predict the next word.
- C) By translating texts between languages to improve linguistic understanding.
- D) By analyzing and replicating human brain activity patterns.

Question 5: **What is supervised fine-tuning (SFT)?**

- A) Compressing a language model to reduce computational requirements
- B) Refining a pre-trained LLM with task-specific, human-annotated data
- C) Training a language model from scratch using only labeled data
- D) Adjusting a language model’s outputs based on automated feedback loops

Question 6: **What is one of the challenges when using perplexity as an evaluation metric?**

- A) It requires labeled datasets, which are hard to obtain
- B) It only measures the speed of the model, not accuracy
- C) It depends on the vocabulary size
- D) It cannot be computed for large language models

Question 7: **Which of the following is a typical step in data preprocessing for large language models (LLMs)?**

- A) Encrypting all textual data to protect privacy
- B) Injecting noise into data to test model robustness
- C) Removing duplicates and low-quality data from the dataset
- D) Translating all data into a single language

Question 8: **What does the Chinchilla scaling law propose?**

- A) Increasing layers indefinitely improves performance
- B) Balancing model size and training data for optimal performance
- C) Always train the largest model, regardless of data amount
- D) Using less computational resources enhances generalization

Question 9: **What do scaling laws propose?**

- A) Doubling data size halves training time
- B) Performance improves predictably with larger models and more data
- C) Smaller models are more efficient than larger ones
- D) Less training data leads to better generalization

Question 10: **What is Direct Preference Optimization (DPO)?**

- A) Uses a reward model and reinforcement learning
- B) Directly optimizes model outputs based on human feedback
- C) Augments data by reversing text sequences
- D) Compresses models to reduce computation

Question 11: **What is a main challenge in evaluating LLMs?**

- A) Answer preference is not trivial
- B) LLMs agree with themselves only 66% of the time
- C) Humans have a lot of variance
- D) Metrics capture all language aspects perfectly

### Solutions

- Solution 1: C
- Solution 2: C
- Solution 3: B
- Solution 4: B
- Solution 5: B
- Solution 6: C
- Solution 7: C
- Solution 8: B
- Solution 9: B
- Solution 10: B
- Solution 11: A


## Quiz 2 - Before Transformers
### Questions

Question 1: **What is an N-gram in language modeling**

- A) A neural network component.
- B) A statistical sequence of N items.
- C) A word embedding technique.
- D) A parsing algorithm.

Question 2: **Word embeddings are sparse vectors.**

- A) True
- B) False

Question 3: **How do recurrent neural networks (RNNs) work?**

- A) Process inputs independently
- B) Use internal states to handle sequences
- C) Apply convolution over data
- D) Utilize attention mechanisms

Question 4: **What is the limitation of RNNs in language modeling?**

- A) Difficulty learning long-term dependencies
- B) Suffering from vanishing gradient problem
- C) Cannot be implemented using GPU for acceleration
- D) Cannot handle variable-length sequences

Question 5: **LSTM models improve upon RNNs by**

- A) Requiring less computational power than RNN
- B) Solving the vanishing gradient problem
- C) Introducing the gating mechanism for long-term dependencies
- D) Not overfitting due to their architectural improvements over RNN

Question 6: **How do LSTMs solve the vanishing gradient problem?**

- A) By resetting the hidden state after each time step
- B) By avoiding using recurrent connections
- C) Using gate mechanisms to reduce the flow of information
- D) With the cell state allowing gradient to flow unchanged

Question 7: **How do LSTMs learn?**

- A) Using self-supervised learning for time series forecasting
- B) Using backpropagation through time
- C) Using supervised learning for next word prediction
- D) Using perplexity as a loss function

### Solutions

- Solution 1: B
- Solution 2: B
- Solution 3: B
- Solution 4: A, B
- Solution 5: B, C
- Solution 6: C, D
- Solution 7: B


## Quiz 3 - Transformers Architecture
### Questions

Question 1: **What is the purpose of the self-attention mechanism?**

- A) Allow the model to focus on different parts of the input at inference.
- B) To capture positional information of tokens in a sequence.
- C) To reduce the computational complexity compared to RNNs.
- D) To enable parallel processing of sequence elements.

Question 2: **What is the role of multi-head attention in Transformer architectures?**

- A) Enable the model to focus on different sequence positions simultaneously.
- B) To increase the model’s capacity to learn different types of relationships.
- C) To decrease the overall computational cost of the model.
- D) To provide positional information to the model.

Question 3: **In the Transformer architecture, what is the purpose of positional encoding?**

- A) To allow the model to understand the order of the sequence elements.
- B) To replace the need for self-attention mechanisms.
- C) To improve the convergence rate during training.
- D) To provide additional input features for better performance.

Question 4: **What is the function of the scaling factor  \frac{1}{\sqrt{d_k}}  in the scaled dot-product attention?**

- A) To make computations more efficient.
- B) Ensure the softmax function operates in a highly sensitive region.
- C) Adjust dot product magnitude to prevent extremely small gradients.
- D) To reduce computational complexity.

Question 5: **In the Transformer architecture, what is the primary reason for using residual connections and layer normalization?**

- A) To facilitate the flow of gradients during training.
- B) To allow deeper networks without the vanishing gradient problem.
- C) To reduce overfitting on the training data.
- D) To decrease the computational requirements during inference.

Question 6: **Which of the following statements about the encoder and decoder in the Transformer architecture are true?**

- A) The encoder processes input sequence into continuous representations.
- B) The translation models use only the encoder part of the Transformers.
- C) The decoder does not use any attention mechanism.
- D) Both encoder and decoder use self-attention mechanisms.

Question 7: **What is the purpose of masked self-attention in the decoder?**

- A) Prevent the model from attending to future positions in the sequence during training.
- B) To allow the model to attend only to relevant parts of the input sequence.
- C) To enforce causality in sequence generation.
- D) To reduce the computational complexity of the attention mechanism.

Question 8: **What are the advantages of using the Transformer architecture over traditional RNN-based models?**

- A) Parallel processing of sequence elements, leading to faster training.
- B) Capture long-range dependencies more effectively.
- C) Fixed computational cost per time step regardless of the sequence length.
- D) Fewer parameters than RNNs.

Question 9: **In the context of Transformers, what is the role of the softmax function in the attention mechanism?**

- A) To normalize the attention scores into probabilities.
- B) To allow the model to focus on the input sequence’s most relevant parts.
- C) To reduce the dimensionality of the data.
- D) To introduce non-linearity into the model.

Question 10: **Which of the following correctly describe the key, query, and value vectors in the Transformer architecture?**

- A) They are linear projections of the input embeddings.
- B) The query vector represents the content of the current position.
- C) They are used to compute attention scores.
- D) The value vector is used to store the actual content to be aggregated.

Question 11: **In multi-head attention, why are separate linear transformations applied to queries, keys, and values for each head?**

- A) To allow each head to attend to different aspects of the input.
- B) To reduce overfitting by increasing parameter sharing.
- C) To increase model capacity without increasing computational cost too much.
- D) To ensure that all heads produce identical outputs.

Question 12: **Suppose that the embedding size is  d_{\text{model}} = 512  and number of heads = 8. What are Q, K, V vectors dimensions d_k ?**

- A) 512
- B) 128
- C) 64
- D) 256

### Solutions

- Solution 1: A
- Solution 2: B
- Solution 3: A
- Solution 4: C
- Solution 5: A, B
- Solution 6: A, D
- Solution 7: A, C
- Solution 8: A, B
- Solution 9: A, B
- Solution 10: A, B, C, D
- Solution 11: A
- Solution 12: B

## Quiz 4 - Retrieval Augmented Generation
### Questions

Question 1: **What are the primary components of a Retrieval-Augmented Generation (RAG) system?**

- A) A retrieval module to fetch relevant documents.
- B) A generative language model to produce outputs using retrieved documents.
- C) An encoder-decoder architecture for language translation.
- D) A reinforcement learning agent to optimize retrieval strategies.

Question 2: **In the context of RAG, what is the main purpose of using vector embeddings?**

- A) To represent text documents and queries in a high-dimensional space.
- B) To enable efficient similarity searches between queries and documents.
- C) To reduce the dimensionality of data for computational efficiency.
- D) To train the language model with fewer parameters.

Question 3: **Which of the following are advantages of using RAG over traditional language models?**

- A) Ability to provide up-to-date information not present in the training data.
- B) Reduction of hallucinations by grounding responses in retrieved documents.
- C) Increased computational efficiency due to smaller model sizes.
- D) Improved handling of long-range dependencies within sequences.

Question 4: **What are considered as the most powerful for retrieving documents?**

- A) TF-IDF
- B) BM25
- C) Cosine similarity
- D) Hybrid Search

Question 5: **Which retrieval method should I use for the query: “What is the name of the capital city of Joe Biden’s country?”**

- A) TD-IDF
- B) BM25
- C) Cosine Similarity
- D) Hybrid method

Question 6: **How does Self-RAG improve the performance of the RAG system?**

- A) By generating multiple possible response segments in parallel.
- B) By using a critic model to select the most accurate segment.
- C) By recursively summarizing retrieved documents.
- D) By adding a retrieval evaluator to assess source quality.

Question 7: **Which metrics are used to evaluate the retriever in a RAG system?**

- A) Precision at k
- B) Recall at k
- C) Normalized Discounted Cumulative Gain (NDCG)
- D) BLEU / ROUGE

Question 8: **What technique does RAG use to overcome context size limitations when processing large documents?**

- A) It ignores parts of the document that don’t fit in the context.
- B) It segments the document into smaller blocks based on titles or headings.
- C) It compresses documents to reduce their size.
- D) It increases the context size of the language model.

Question 9: **What does Corrective RAG (CRAG) add to the traditional RAG system?**

- A) A retrieval evaluator to assess the quality of retrieved sources.
- B) An integrated machine translation module.
- C) A critic model to select the best responses.
- D) A hierarchy of summaries to preserve context.

Question 10: **What is the primary function of RAPTOR?**

- A) Generates multiple responses in parallel and uses a critic model.
- B) Adds a retrieval evaluator to assess the quality of retrieved sources.
- C) Recursively summarizes retrieved documents, creating a hierarchy of summaries.
- D) Processes the entire dataset to create a knowledge graph.

Question 11: **What is the primary function of GraphRAG?**

- A) Generates multiple possible response segments in parallel
- B) Create a full dataset knowledge graph that organizes data hierarchically
- C) Creates a hierarchy of summaries to reduce information overload
- D) Adds a retrieval evaluator to assess the quality of retrieved sources

Question 12: **What is the primary function of HyDE?**

- A) It compresses large documents into shorter embeddings
- B) It creates a hierarchical structure of documents to improve retrieval
- C) It employs RLHF to achieve better retrieval
- D) It generates hypothetical answers to queries used for retrieving

Question 13: **What primary issue does the “Lost in the Middle” paper address?**

- A) Models cannot handle sequences longer than 512 tokens
- B) Models have increased computational costs with longer contexts
- C) Models focus on the beginning and end of contexts
- D) Models perform equally well across all parts of the context

Question 14: **What are HNSW and FAISS famous for?**

- A) Algorithms for compressing language models to reduce size
- B) Methods for training language models with fewer parameters
- C) Approximate nearest neighbor search for efficient retrieval of embeddings
- D) Techniques for augmenting training datasets with synthetic data

Question 15: **What is the primary purpose of Reciprocal Rank Fusion (RRF)?**

- A) Combine rankings from multiple retrieval models
- B) Fuse document embeddings into a single representation for better context
- C) Dynamically adjust retrieval strategies based on user interactions
- D) Prioritize documents with the highest retrieval latency

### Solutions


- Solution 1: A, B
- Solution 2: A, B
- Solution 3: A, B
- Solution 4: D
- Solution 5: D
- Solution 6: B, D
- Solution 7: A, B, C
- Solution 8: B
- Solution 9: A
- Solution 10: D
- Solution 11: C
- Solution 12: D
- Solution 13: C
- Solution 14: C
- Solution 15: A


## Quiz 5 - Beyond LLM, Tools and (Multi)-Agents
### Questions

Question 1: **Which of the following statements are true about emergent abilities in large language models (LLMs)?**

- A) They are present in both large and small language models
- B) They appear unexpectedly when the model size surpasses a critical threshold
- C) They are deliberately engineered into the model during training
- D) An example of an emergent ability is solving complex arithmetic problems

Question 2: **What are some advantages / limitations of large language models (LLMs)?**

- A) LLM can generate toxic, biased, or misleading content, posing societal risk
- B) Training larger models reduces risks of overfitting and data memorization
- C) Massive datasets required for training can amplify existing biases
- D) All limitations of LLMs are fully understood and documented

Question 3: **How can the capabilities of LLMs be improved?**

- A) Reducing the size of the models to prevent overfitting
- B) Developing new model architectures and using higher-quality data
- C) Focusing research on making emergent abilities accessible to smaller models
- D) Limiting training to known data to prevent unknown limitations

Question 4: **Which statements correctly describe LLM agents as per the course summary?**

- A) An LLM agent uses a large language model as the main controller
- B) They can perform complex tasks using advanced planning techniques and tools
- C) The concept of LLM agents was first introduced in early 2021
- D) LLM agents cannot use external tools like web search and code interpreters

Question 5: **Why are agents preferred over single LLM calls for complex tasks?**

- A) They can plan sequences of actions and learn from experiences
- B) Agents are limited to predefined responses and cannot adapt to new tasks
- C) Agents can perform complex tasks by utilizing external tools
- D) Parallelisation offers faster answers for Agents based LLM than single LLM

Question 6: **Which of the following are key components of an LLM agent?**

- A) Agent/Brain: The LLM acting as the main controller and decision-maker
- B) Randomization Module: Introducing randomness to the agent’s decisions
- C) Memory: Storing past interactions and experiences
- D) Emotion Engine: Simulating human emotions in the agent’s responses

Question 7: **What does “reflection” refer to?**

- A) The agent’s ability to mirror the user’s language style
- B) A framework allowing agent to improve performance using linguistic feedback
- C) The process of agents self-evaluating their actions for errors
- D) Agent mechanism transforming environmental feedback into improvements

Question 8: **What are some current limitations of LLM agents and multi-agent systems?**

- A) Ensuring agents don’t deviate from the initial plan - divergence of planning
- B) Guaranteeing that agents can perform tasks without any form of communication
- C) Developing robust methods for testing and evaluating agent performance
- D) Trust and security in real-world deployments

### Solutions

- Solution 1: B, D
- Solution 2: A, C
- Solution 3: B, C
- Solution 4: A, B
- Solution 5: C
- Solution 6: A, C
- Solution 7: B
- Solution 8: A, D
