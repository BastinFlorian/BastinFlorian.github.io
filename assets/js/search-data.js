// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-git-repositories",
          title: "Git Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-essential-llm-readings",
          title: "Essential LLM Readings",
          description: "Curated list of foundational and recent papers on Large Language Models",
          section: "Navigation",
          handler: () => {
            window.location.href = "/readings/";
          },
        },{id: "post-comment-utiliser-le-mutlimodal-pour-améliorer-un-chatbot-rag-octo-talks",
        
          title: 'Comment utiliser le mutlimodal pour améliorer un chatbot RAG ? - OCTO Talks... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Comment détecter, choisir, analyser et résumer des informations non textuelles (images &amp; tableaux) dans vos sources documentaires en utilisant le multimodal ?",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.octo.com/comment-utiliser-le-mutlimodal-pour-ameliorer-un-chatbot-rag", "_blank");
          
        },
      },{id: "post-construire-son-rag-retrieval-augmented-generation-grâce-à-langchain-l-exemple-de-l-helpdesk-d-octo-octo-talks",
        
          title: 'Construire son RAG (Retrieval Augmented Generation) grâce à langchain: L’exemple de l’Helpdesk d’OCTO... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "“Je souhaiterais connaître la démarche pour accéder à mon comité d’entrepriseQui n&#39;a jamais imaginé poser cette question à un agent conversationnel permettant de lui indiquer facilement la source d&#39;information, plutôt que de chercher dans 10 documents ou de demander à 10 personnes différentes ? Bienvenue au pays des RAG.Figure 1: Exemples de quest...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.octo.com/le-chatbot-docto-langchain-rag-et-code-associe", "_blank");
          
        },
      },{id: "post-how-to-balance-power-and-control-when-using-dataflow-with-an-oltp-sql-database-beam-summit",
        
          title: 'How to balance power and control when using Dataflow with an OLTP SQL... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Beam Summit brings together experts and community to share the exciting ways they are using, changing, and advancing Apache Beam and the world of data and stream processing.",
        section: "Posts",
        handler: () => {
          
            window.open("https://beamsummit.org/sessions/2023/how-to-balance-power-and-control-when-using-dataflow-with-an-oltp-sql-database/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-for-dauphine-tunis-students-you-can-find-the-ressources-you-need-here-sparkles",
          title: 'For Dauphine Tunis students, you can find the ressources you need here :sparkles:...',
          description: "",
          section: "News",},{id: "news-check-out-my-genai-courses-spotify-podcast-page",
          title: 'Check out my GenAI courses Spotify Podcast page',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%73%74%69%6E%66%6C%6F%72%69%61%6E%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
