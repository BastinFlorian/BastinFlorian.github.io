---
layout: page
permalink: /readings/
title: Essential LLM Readings
description: Curated list of foundational and recent papers on Large Language Models
nav: true
nav_order: 7
---

# Essential LLM Research Papers

A curated reading list of the most important papers in Large Language Models, organized by priority and importance.

---

## 📌 Mandatory Readings (Must Read First)

These four papers form the absolute foundation of understanding LLMs:

### 1. **Attention Is All You Need** ⭐⭐⭐
- **Authors:** Vaswani et al. (2017)
- **Link:** [arXiv](https://arxiv.org/abs/1706.03762)
- **Why Essential:** Introduced the Transformer architecture that underlies ALL modern LLMs. Without this paper, GPT, BERT, Claude, and other models wouldn't exist.
- **Key Concepts:** Self-attention mechanism, multi-head attention, positional encoding

### 2. **Language Models are Few-Shot Learners (GPT-3)** ⭐⭐⭐
- **Authors:** Brown et al., OpenAI (2020)
- **Link:** [arXiv](https://arxiv.org/abs/2005.14165)
- **Why Essential:** Demonstrated that scaling + prompting = emergent capabilities. Triggered the LLM revolution and showed models can solve new tasks without fine-tuning.
- **Key Concepts:** In-context learning, few-shot prompting, scaling laws

### 3. **BERT: Pre-training of Deep Bidirectional Transformers** ⭐⭐⭐
- **Authors:** Devlin et al., Google (2018)
- **Link:** [arXiv](https://arxiv.org/abs/1810.04805)
- **Why Essential:** First massively pre-trained model that revolutionized NLP. Introduced transfer learning and bidirectional context understanding.
- **Key Concepts:** Masked language modeling, transfer learning, bidirectional transformers

### 4. **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs** 🔥
- **Authors:** DeepSeek-AI (January 2025)
- **Link:** [arXiv](https://arxiv.org/pdf/2501.12948)
- **Why Revolutionary:**
  - Achieves OpenAI o1 level reasoning performance while being fully open-source
  - Introduces novel reinforcement learning approach for reasoning
  - Outperforms GPT-4 on mathematical and coding benchmarks
- **Key Innovations:** GRPO (Group Relative Policy Optimization), reasoning-focused RL training

---

## 🎯 Core Papers (Highly Recommended)

Essential papers for understanding modern LLM capabilities:

### **Chain of Thought Prompting Elicits Reasoning** ⭐⭐⭐
- **Authors:** Wei et al., Google (2022)
- **Link:** [arXiv](https://arxiv.org/abs/2201.11903)
- **Impact:** Breakthrough in LLM reasoning, fundamental technique used everywhere today

### **Fine-Tuning Language Models from Human Preferences (RLHF)** ⭐⭐⭐
- **Authors:** Ouyang et al., OpenAI (2022)
- **Link:** [arXiv](https://arxiv.org/abs/2203.02155)
- **Impact:** Key to making LLMs useful and aligned, basis of ChatGPT and all conversational models

---

## 🚀 Recent Breakthroughs (2024-2025)

### **DeepSeek-V3 Technical Report**
- **Authors:** DeepSeek-AI (December 2024)
- **Link:** [arXiv](https://arxiv.org/abs/2412.19437)
- **Impact:** 671B parameter model trained with only $2.8M budget, achieving GPT-4 performance at fraction of cost

### **Scaling LLM Test-Time Compute Optimally**
- **Authors:** Various (August 2024)
- **Link:** [arXiv](https://arxiv.org/abs/2408.03314)
- **Impact:** New paradigm for improving LLM outputs during inference

---

## 📈 Important Papers (Recommended)

### Scaling and Architecture
- **Scaling Laws for Neural Language Models** ⭐⭐ — Kaplan et al. (2020): [arXiv](https://arxiv.org/abs/2001.08361)
  - Shows predictable performance growth with scale

- **LLaMA: Open and Efficient Foundation Language Models** ⭐⭐ — Touvron et al., Meta (2023): [arXiv](https://arxiv.org/abs/2302.13971)
  - Made powerful LLMs accessible to open-source community

### Alignment and Safety
- **Constitutional AI: Harmlessness from AI Feedback** ⭐⭐ — Bai et al., Anthropic (2022): [arXiv](https://arxiv.org/abs/2212.08073)
  - Alternative approach to RLHF for model alignment

### Efficiency and Adaptation
- **LoRA: Low-Rank Adaptation of Large Language Models** ⭐⭐ — Hu et al. (2021): [arXiv](https://arxiv.org/abs/2106.09685)
  - Efficient fine-tuning method widely adopted

- **FlashAttention: Fast and Memory-Efficient Exact Attention** ⭐⭐ — Dao et al. (2022): [arXiv](https://arxiv.org/abs/2205.14135)
  - Key optimization for fast training/inference on GPU

---

## 📚 Additional Readings

### Understanding and Analysis
- **The Illustrated Transformer** ⭐ — Jay Alammar: [Blog](http://jalammar.github.io/illustrated-transformer/)
  - Best visual guide to understanding Transformers

- **Emergent Abilities of Large Language Models** ⭐ — Wei et al. (2022): [arXiv](https://arxiv.org/abs/2206.07682)
  - Analysis of emergent behaviors at scale

### Scaling Examples
- **PaLM: Scaling Language Models with Pathways** ⭐ — Chowdhery et al., Google (2022): [arXiv](https://arxiv.org/abs/2204.02311)
  - 540B parameter model demonstrating extreme scaling

### Advanced Techniques
- **Self-Consistency Improves Chain of Thought Reasoning** ⭐ — Wang et al. (2022): [arXiv](https://arxiv.org/abs/2203.11171)
  - Improves reasoning with multiple sampling

- **Toolformer: Language Models Can Teach Themselves to Use Tools** ⭐ — Schick et al., Meta (2023): [arXiv](https://arxiv.org/abs/2302.04761)
  - LLMs learning to use APIs and external tools

---

## 📖 Reading Roadmap

1. **Start with the foundations:** Read the 3 mandatory papers in order
2. **Understand modern capabilities:** Read Chain of Thought and RLHF papers
3. **Explore recent breakthroughs:** Study DeepSeek-V3 for understanding current SOTA
4. **Deep dive by interest:**
   - For efficiency → LoRA, FlashAttention
   - For safety → Constitutional AI
   - For open models → LLaMA series
   - For scaling → Scaling Laws, PaLM

---

## 🔗 Quick Links

- [Dauphine Tunis 2025-2026 Course Materials](/teaching/)
- [GitHub Repository - Langchain/Langgraph Courses](https://github.com/BastinFlorian/Langchain-Langgraph-courses)
- [arXiv ML Papers](https://arxiv.org/list/cs.LG/recent)
- [Papers with Code](https://paperswithcode.com/)
