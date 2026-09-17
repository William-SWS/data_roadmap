window.ROADMAP_DATA = {
  title: "Full Stack AI Roadmap",
  subtitle: "Complete study path from fundamentals to production AI — all free resources",
  phases: [
    // ============================================================
    // PHASE 0 — Core Fundamentals
    // ============================================================
    {
      id: "phase-0",
      number: 0,
      title: "Core Fundamentals",
      description: "Universal prerequisites across all AI/Data paths — programming, math, and tools",
      icon: "foundation",
      topics: [
        {
          id: "programming-logic",
          title: "Programming Logic & Algorithms",
          description: "Computational thinking, flowcharts, pseudocode, basic algorithms and data structures",
          sources: ["data-analyst", "machine-learning", "ai-engineer"],
          resources: [
            { type: "course", title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/", platform: "Harvard" },
            { type: "video", title: "Data Structures & Algorithms — freeCodeCamp", url: "https://youtu.be/8hly31xKli0", platform: "YouTube" },
            { type: "interactive", title: "Exercism — Python Track", url: "https://exercism.org/tracks/python", platform: "Exercism" }
          ]
        },
        {
          id: "python-basics",
          title: "Python — Basics & OOP",
          description: "Variables, types, control flow, functions, classes, modules, virtual environments",
          sources: ["data-analyst", "machine-learning", "ai-data-scientist", "data-engineer", "ai-engineer"],
          resources: [
            { type: "course", title: "CS50P — Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/", platform: "Harvard" },
            { type: "video", title: "Python Full Course for Beginners — freeCodeCamp", url: "https://youtu.be/rfscVS0vtbw", platform: "YouTube" },
            { type: "docs", title: "The Python Tutorial — Official Docs", url: "https://docs.python.org/3/tutorial/", platform: "Python.org" },
            { type: "book", title: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", platform: "Online Book" }
          ]
        },
        {
          id: "git-version-control",
          title: "Git & Version Control",
          description: "Repositories, commits, branches, merging, pull requests, GitHub workflows",
          sources: ["data-analyst", "data-engineer", "ai-engineer"],
          resources: [
            { type: "interactive", title: "Learn Git Branching", url: "https://learngitbranching.js.org/", platform: "Interactive" },
            { type: "book", title: "Pro Git Book (free online)", url: "https://git-scm.com/book/en/v2", platform: "Git SCM" },
            { type: "video", title: "Git & GitHub Crash Course — Traversy Media", url: "https://youtu.be/SWYqp7iY_Tc", platform: "YouTube" }
          ]
        },
        {
          id: "command-line-linux",
          title: "Command Line & Linux Basics",
          description: "Terminal navigation, bash scripting, file manipulation, SSH, environment variables",
          sources: ["data-engineer", "ai-engineer"],
          resources: [
            { type: "course", title: "The Missing Semester of Your CS Education — MIT", url: "https://missing.csail.mit.edu/", platform: "MIT" },
            { type: "interactive", title: "Linux Survival", url: "https://linuxsurvival.com/", platform: "Interactive" },
            { type: "video", title: "Bash Scripting Full Course — freeCodeCamp", url: "https://youtu.be/tK9Oc6AEnR4", platform: "YouTube" }
          ]
        },
        {
          id: "dev-environment",
          title: "Development Environment Setup",
          description: "VSCode, Jupyter Notebooks, Conda/pip/uv, virtual environments, linters",
          sources: ["data-analyst", "ai-data-scientist", "machine-learning"],
          resources: [
            { type: "docs", title: "Jupyter Documentation — Getting Started", url: "https://jupyter.org/try", platform: "Jupyter" },
            { type: "video", title: "VSCode for Python Development — Tech With Tim", url: "https://youtu.be/Z3i04RoI9Fk", platform: "YouTube" },
            { type: "docs", title: "Python Virtual Environments — Real Python", url: "https://realpython.com/python-virtual-environments-a-primer/", platform: "Real Python" }
          ]
        },
        {
          id: "linear-algebra",
          title: "Linear Algebra",
          description: "Vectors, matrices, transformations, eigenvalues, SVD — the math behind ML",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "course", title: "MIT 18.06 — Linear Algebra (Gilbert Strang)", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", platform: "MIT OCW" },
            { type: "video", title: "Essence of Linear Algebra — 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", platform: "YouTube" },
            { type: "book", title: "Linear Algebra Done Right — Sheldon Axler (free)", url: "https://linear.axler.net/", platform: "Online Book" }
          ]
        },
        {
          id: "calculus",
          title: "Calculus",
          description: "Derivatives, gradients, chain rule, integrals, multivariable calculus for optimization",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "Essence of Calculus — 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", platform: "YouTube" },
            { type: "course", title: "MIT 18.01 — Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/", platform: "MIT OCW" },
            { type: "interactive", title: "Khan Academy — Calculus", url: "https://www.khanacademy.org/math/calculus-1", platform: "Khan Academy" }
          ]
        },
        {
          id: "probability-statistics",
          title: "Probability & Statistics",
          description: "Distributions, Bayes theorem, hypothesis testing, confidence intervals, p-values",
          sources: ["data-analyst", "machine-learning", "ai-data-scientist"],
          resources: [
            { type: "course", title: "Harvard Stat 110 — Probability", url: "https://projects.iq.harvard.edu/stat110/home", platform: "Harvard" },
            { type: "video", title: "StatQuest — Statistics Fundamentals Playlist", url: "https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9", platform: "YouTube" },
            { type: "interactive", title: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", platform: "Khan Academy" },
            { type: "book", title: "Think Stats 2e — Allen Downey (free)", url: "https://greenteapress.com/thinkstats2/", platform: "Online Book" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 1 — Data Analysis
    // ============================================================
    {
      id: "phase-1",
      number: 1,
      title: "Data Analysis",
      description: "The foundation of every data role — querying, wrangling, and understanding data",
      icon: "chart-bar",
      topics: [
        {
          id: "excel-sheets",
          title: "Excel & Google Sheets (Advanced)",
          description: "Pivot tables, VLOOKUP/XLOOKUP, conditional formatting, data validation, macros",
          sources: ["data-analyst"],
          resources: [
            { type: "course", title: "Google Sheets — Complete Course — freeCodeCamp", url: "https://youtu.be/N2opj8XzYBY", platform: "YouTube" },
            { type: "docs", title: "Google Sheets Function List", url: "https://support.google.com/docs/table/25273", platform: "Google" },
            { type: "course", title: "Excel Skills for Business — Macquarie (Coursera audit)", url: "https://www.coursera.org/specializations/excel", platform: "Coursera" }
          ]
        },
        {
          id: "sql-fundamentals",
          title: "SQL — Fundamentals",
          description: "SELECT, WHERE, JOINs, GROUP BY, HAVING, subqueries, CTEs",
          sources: ["data-analyst", "data-engineer", "ai-data-scientist"],
          resources: [
            { type: "interactive", title: "SQLBolt — Learn SQL with Interactive Exercises", url: "https://sqlbolt.com/", platform: "SQLBolt" },
            { type: "interactive", title: "Mode Analytics — SQL Tutorial", url: "https://mode.com/sql-tutorial", platform: "Mode" },
            { type: "course", title: "SQL for Data Science — UC Davis (Coursera audit)", url: "https://www.coursera.org/learn/sql-for-data-science", platform: "Coursera" },
            { type: "interactive", title: "Select Star SQL", url: "https://selectstarsql.com/", platform: "Interactive" }
          ]
        },
        {
          id: "sql-advanced",
          title: "SQL — Advanced",
          description: "Window functions, recursive CTEs, query optimization, indexes, execution plans",
          sources: ["data-analyst", "data-engineer"],
          resources: [
            { type: "interactive", title: "Window Functions — PostgreSQL Exercises", url: "https://pgexercises.com/questions/aggregates/", platform: "PgExercises" },
            { type: "tutorial", title: "Advanced SQL — Mode Analytics", url: "https://mode.com/sql-tutorial/sql-window-functions", platform: "Mode" },
            { type: "video", title: "Advanced SQL Tutorial — freeCodeCamp", url: "https://youtu.be/M-55BmjOuXY", platform: "YouTube" }
          ]
        },
        {
          id: "relational-databases",
          title: "Relational Databases (PostgreSQL / MySQL)",
          description: "Schema design, normalization, ACID properties, indexing, basic administration",
          sources: ["data-analyst", "data-engineer"],
          resources: [
            { type: "docs", title: "PostgreSQL Official Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html", platform: "PostgreSQL" },
            { type: "video", title: "PostgreSQL Full Course — freeCodeCamp", url: "https://youtu.be/qw--VYLpxG4", platform: "YouTube" },
            { type: "interactive", title: "SQLZoo — Interactive SQL Practice", url: "https://sqlzoo.net/", platform: "SQLZoo" }
          ]
        },
        {
          id: "pandas",
          title: "Pandas",
          description: "DataFrames, Series, indexing, groupby, merge, pivot, apply, time series in pandas",
          sources: ["data-analyst", "machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Pandas Official Getting Started Tutorials", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/", platform: "Pandas" },
            { type: "course", title: "Kaggle — Pandas Course", url: "https://www.kaggle.com/learn/pandas", platform: "Kaggle" },
            { type: "video", title: "Pandas Complete Tutorial — Keith Galli", url: "https://youtu.be/vmEHCJofslg", platform: "YouTube" }
          ]
        },
        {
          id: "numpy",
          title: "NumPy",
          description: "N-dimensional arrays, broadcasting, vectorized operations, linear algebra with numpy",
          sources: ["data-analyst", "machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "NumPy Quickstart Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html", platform: "NumPy" },
            { type: "video", title: "NumPy Full Course — freeCodeCamp", url: "https://youtu.be/QUT1VHiLmmI", platform: "YouTube" },
            { type: "tutorial", title: "NumPy Illustrated — Lev Maximov", url: "https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d", platform: "Medium" }
          ]
        },
        {
          id: "data-visualization",
          title: "Data Visualization — Matplotlib & Seaborn",
          description: "Line plots, bar charts, histograms, heatmaps, scatter plots, customizing figures",
          sources: ["data-analyst", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html", platform: "Matplotlib" },
            { type: "docs", title: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html", platform: "Seaborn" },
            { type: "video", title: "Matplotlib Crash Course — Corey Schafer", url: "https://youtu.be/UO98lJQ3QGI", platform: "YouTube" }
          ]
        },
        {
          id: "data-cleaning",
          title: "Data Cleaning & Wrangling",
          description: "Handling missing data, outliers, duplicates, type conversion, string manipulation",
          sources: ["data-analyst", "ai-data-scientist"],
          resources: [
            { type: "course", title: "Kaggle — Data Cleaning", url: "https://www.kaggle.com/learn/data-cleaning", platform: "Kaggle" },
            { type: "tutorial", title: "Real Python — Data Cleaning with Pandas", url: "https://realpython.com/python-data-cleaning-numpy-pandas/", platform: "Real Python" },
            { type: "video", title: "Data Cleaning in Python — Sentdex", url: "https://youtu.be/ZOX18HfLHGQ", platform: "YouTube" }
          ]
        },
        {
          id: "eda",
          title: "Exploratory Data Analysis (EDA)",
          description: "Summary statistics, distributions, correlations, visual patterns, hypothesis generation",
          sources: ["data-analyst", "ai-data-scientist", "machine-learning"],
          resources: [
            { type: "course", title: "Kaggle — Data Visualization", url: "https://www.kaggle.com/learn/data-visualization", platform: "Kaggle" },
            { type: "video", title: "EDA Full Walkthrough — Ken Jee", url: "https://youtu.be/QWgg4w1SpJ8", platform: "YouTube" },
            { type: "docs", title: "Plotly Express for EDA", url: "https://plotly.com/python/plotly-express/", platform: "Plotly" }
          ]
        },
        {
          id: "descriptive-inferential-stats",
          title: "Descriptive & Inferential Statistics",
          description: "Mean, median, mode, variance, standard deviation, confidence intervals, p-values",
          sources: ["data-analyst", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — Statistics Fundamentals", url: "https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9", platform: "YouTube" },
            { type: "interactive", title: "Khan Academy — Inferential Statistics", url: "https://www.khanacademy.org/math/statistics-probability", platform: "Khan Academy" },
            { type: "book", title: "OpenIntro Statistics (free PDF)", url: "https://www.openintro.org/book/os/", platform: "OpenIntro" }
          ]
        },
        {
          id: "hypothesis-testing",
          title: "Hypothesis Testing",
          description: "t-tests, chi-square, ANOVA, A/B testing, Type I and II errors",
          sources: ["data-analyst", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — Hypothesis Testing Playlist", url: "https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9", platform: "YouTube" },
            { type: "tutorial", title: "A/B Testing Guide — Evan Miller", url: "https://www.evanmiller.org/ab-testing/", platform: "Web" },
            { type: "course", title: "Udacity — A/B Testing (free)", url: "https://www.udacity.com/course/ab-testing--ud257", platform: "Udacity" }
          ]
        },
        {
          id: "data-storytelling",
          title: "Data Storytelling & Communication",
          description: "Narrative structure, audience awareness, presenting findings, dashboards vs reports",
          sources: ["data-analyst"],
          resources: [
            { type: "book", title: "Storytelling with Data — Blog & Exercises", url: "https://www.storytellingwithdata.com/blog", platform: "Blog" },
            { type: "video", title: "How to Present Data — Hans Rosling TED Talk", url: "https://youtu.be/hVimVzgtD6w", platform: "YouTube" },
            { type: "course", title: "Google Data Analytics Capstone (Coursera audit)", url: "https://www.coursera.org/learn/google-data-analytics-capstone", platform: "Coursera" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 2 — Business Intelligence & Power BI
    // ============================================================
    {
      id: "phase-2",
      number: 2,
      title: "Business Intelligence & Power BI",
      description: "Transform data into interactive dashboards and business insights",
      icon: "bar-chart-2",
      topics: [
        {
          id: "power-bi-desktop",
          title: "Power BI Desktop — Interface & Reports",
          description: "Canvas, visuals, filters, slicers, drill-through, bookmarks, formatting",
          sources: ["power-bi"],
          resources: [
            { type: "course", title: "Microsoft Learn — Power BI Fundamentals", url: "https://learn.microsoft.com/en-us/training/paths/get-started-power-bi/", platform: "Microsoft" },
            { type: "video", title: "Power BI Full Course — freeCodeCamp", url: "https://youtu.be/3u7MQz1EyPY", platform: "YouTube" },
            { type: "video", title: "Guy in a Cube — Power BI Beginner Series", url: "https://youtube.com/@GuyInACube", platform: "YouTube" }
          ]
        },
        {
          id: "dax",
          title: "DAX (Data Analysis Expressions)",
          description: "Measures, calculated columns, CALCULATE, FILTER, ALL, time intelligence functions",
          sources: ["power-bi"],
          resources: [
            { type: "docs", title: "DAX Reference — Microsoft", url: "https://learn.microsoft.com/en-us/dax/", platform: "Microsoft" },
            { type: "course", title: "SQLBI — Introducing DAX (free video course)", url: "https://www.sqlbi.com/p/introducing-dax-video-course/", platform: "SQLBI" },
            { type: "tutorial", title: "DAX Patterns", url: "https://www.daxpatterns.com/", platform: "SQLBI" }
          ]
        },
        {
          id: "power-query",
          title: "Power Query (ETL in Power BI)",
          description: "M language basics, data transformation steps, merge queries, append, parameters",
          sources: ["power-bi"],
          resources: [
            { type: "docs", title: "Power Query Documentation — Microsoft", url: "https://learn.microsoft.com/en-us/power-query/", platform: "Microsoft" },
            { type: "video", title: "Power Query Full Tutorial — Leila Gharani", url: "https://youtu.be/0aeZX1l4JT4", platform: "YouTube" },
            { type: "docs", title: "Power Query M Formula Language Reference", url: "https://learn.microsoft.com/en-us/powerquery-m/", platform: "Microsoft" }
          ]
        },
        {
          id: "data-modeling-bi",
          title: "Data Modeling for BI",
          description: "Star schema, snowflake schema, relationships, cardinality, surrogate keys",
          sources: ["power-bi", "data-engineer"],
          resources: [
            { type: "tutorial", title: "Star Schema Explained — SQLBI", url: "https://www.sqlbi.com/articles/star-schema-and-data-modeling/", platform: "SQLBI" },
            { type: "course", title: "Microsoft Learn — Model Data in Power BI", url: "https://learn.microsoft.com/en-us/training/paths/model-data-power-bi/", platform: "Microsoft" },
            { type: "video", title: "Data Modeling Best Practices — Guy in a Cube", url: "https://youtu.be/pMuKZRwX-Zs", platform: "YouTube" }
          ]
        },
        {
          id: "dashboards-best-practices",
          title: "Interactive Dashboards & Visualization Best Practices",
          description: "Choosing the right chart, color theory, accessibility, dashboard layout principles",
          sources: ["power-bi", "data-analyst"],
          resources: [
            { type: "book", title: "Storytelling with Data (blog + exercises)", url: "https://www.storytellingwithdata.com/blog", platform: "Blog" },
            { type: "docs", title: "Data Visualization Catalogue", url: "https://datavizcatalogue.com/", platform: "Web" },
            { type: "video", title: "Dashboard Design Principles — Guy in a Cube", url: "https://youtu.be/pMuKZRwX-Zs", platform: "YouTube" }
          ]
        },
        {
          id: "power-bi-service",
          title: "Power BI Service & Sharing",
          description: "Publishing, workspaces, row-level security, scheduled refresh, embedded reports",
          sources: ["power-bi"],
          resources: [
            { type: "docs", title: "Power BI Service Documentation", url: "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview", platform: "Microsoft" },
            { type: "video", title: "Publishing & Sharing Power BI Reports", url: "https://youtu.be/hc7LFkSMPiI", platform: "YouTube" },
            { type: "course", title: "Microsoft Learn — Manage Workspaces", url: "https://learn.microsoft.com/en-us/training/modules/create-manage-workspaces-power-bi/", platform: "Microsoft" }
          ]
        },
        {
          id: "business-metrics",
          title: "Business Metrics (KPIs, OKRs)",
          description: "Revenue metrics, customer metrics (LTV, churn), operational KPIs, setting OKRs",
          sources: ["data-analyst", "power-bi"],
          resources: [
            { type: "tutorial", title: "KPI Examples for Every Department — Klipfolio", url: "https://www.klipfolio.com/metrics", platform: "Klipfolio" },
            { type: "book", title: "Measure What Matters — Summary", url: "https://www.whatmatters.com/get-started", platform: "Web" },
            { type: "video", title: "KPIs vs Metrics Explained", url: "https://youtu.be/UHwKoaMOvJo", platform: "YouTube" }
          ]
        },
        {
          id: "looker-studio",
          title: "Google Looker Studio",
          description: "Free Google BI tool, connecting data sources, building reports, sharing",
          sources: ["data-analyst"],
          resources: [
            { type: "docs", title: "Looker Studio Help Center", url: "https://support.google.com/looker-studio", platform: "Google" },
            { type: "video", title: "Looker Studio Full Tutorial — freeCodeCamp", url: "https://youtu.be/6FTUpceqWnc", platform: "YouTube" },
            { type: "tutorial", title: "Looker Studio Report Gallery", url: "https://lookerstudio.google.com/gallery", platform: "Google" }
          ]
        },
        {
          id: "tableau",
          title: "Tableau (Public / Free)",
          description: "Visual analytics, drag-and-drop interface, calculated fields, Tableau Public sharing",
          sources: ["data-analyst"],
          resources: [
            { type: "course", title: "Tableau Free Training Videos", url: "https://www.tableau.com/learn/training", platform: "Tableau" },
            { type: "tutorial", title: "Tableau Public — Viz of the Day", url: "https://public.tableau.com/app/discover/viz-of-the-day", platform: "Tableau" },
            { type: "video", title: "Tableau Full Course — freeCodeCamp", url: "https://youtu.be/TPMlZxRRaBQ", platform: "YouTube" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 3 — Classical Machine Learning
    // ============================================================
    {
      id: "phase-3",
      number: 3,
      title: "Classical Machine Learning",
      description: "From theory to practice — supervised, unsupervised, and evaluation",
      icon: "brain",
      topics: [
        {
          id: "sklearn-pipelines",
          title: "Scikit-learn — API & Pipelines",
          description: "Estimators, transformers, pipelines, ColumnTransformer, model persistence",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Scikit-learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", platform: "Scikit-learn" },
            { type: "course", title: "Kaggle — Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning", platform: "Kaggle" },
            { type: "video", title: "Scikit-learn Crash Course — freeCodeCamp", url: "https://youtu.be/0B5eIE_1vpU", platform: "YouTube" }
          ]
        },
        {
          id: "linear-regression",
          title: "Linear Regression & Polynomial Regression",
          description: "OLS, gradient descent, cost function, regularization (Ridge, Lasso, ElasticNet)",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — Linear Regression", url: "https://youtu.be/PaFPbb66DxQ", platform: "YouTube" },
            { type: "course", title: "Andrew Ng — Machine Learning (Coursera audit)", url: "https://www.coursera.org/learn/machine-learning", platform: "Coursera" },
            { type: "docs", title: "Scikit-learn — Linear Models", url: "https://scikit-learn.org/stable/modules/linear_model.html", platform: "Scikit-learn" }
          ]
        },
        {
          id: "logistic-regression",
          title: "Logistic Regression & Classification",
          description: "Sigmoid function, decision boundary, multiclass classification, softmax",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — Logistic Regression", url: "https://youtu.be/yIYKR4sgzI8", platform: "YouTube" },
            { type: "docs", title: "Logistic Regression — Scikit-learn Docs", url: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression", platform: "Scikit-learn" },
            { type: "course", title: "Google ML Crash Course — Classification", url: "https://developers.google.com/machine-learning/crash-course/classification", platform: "Google" }
          ]
        },
        {
          id: "decision-trees-rf",
          title: "Decision Trees & Random Forests",
          description: "Information gain, Gini impurity, pruning, bagging, ensemble methods",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — Decision Trees", url: "https://youtu.be/7VeUPuFGJHk", platform: "YouTube" },
            { type: "video", title: "StatQuest — Random Forests", url: "https://youtu.be/J4Wdy0Wc_xQ", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — Ensemble Methods", url: "https://scikit-learn.org/stable/modules/ensemble.html", platform: "Scikit-learn" }
          ]
        },
        {
          id: "gradient-boosting",
          title: "Gradient Boosting (XGBoost, LightGBM, CatBoost)",
          description: "Boosting concept, XGBoost API, LightGBM speed, CatBoost for categoricals",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — XGBoost", url: "https://youtu.be/OtD8wVaFm6E", platform: "YouTube" },
            { type: "docs", title: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/en/latest/", platform: "XGBoost" },
            { type: "docs", title: "LightGBM Documentation", url: "https://lightgbm.readthedocs.io/en/latest/", platform: "LightGBM" }
          ]
        },
        {
          id: "svm-knn-nb",
          title: "SVM, KNN & Naive Bayes",
          description: "Support vectors, kernel trick, k-nearest neighbors, Bayesian classifiers",
          sources: ["machine-learning"],
          resources: [
            { type: "video", title: "StatQuest — Support Vector Machines", url: "https://youtu.be/efR1C6CvhmE", platform: "YouTube" },
            { type: "video", title: "StatQuest — KNN", url: "https://youtu.be/HVXime0nQeI", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — SVM Guide", url: "https://scikit-learn.org/stable/modules/svm.html", platform: "Scikit-learn" }
          ]
        },
        {
          id: "clustering",
          title: "Clustering (K-Means, DBSCAN, Hierarchical)",
          description: "Unsupervised grouping, elbow method, silhouette score, density-based clustering",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — K-Means Clustering", url: "https://youtu.be/4b5d3muPQmA", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html", platform: "Scikit-learn" },
            { type: "course", title: "Kaggle — Unsupervised Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning", platform: "Kaggle" }
          ]
        },
        {
          id: "dimensionality-reduction",
          title: "Dimensionality Reduction (PCA, t-SNE, UMAP)",
          description: "Principal components, variance explained, manifold learning, visualization",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — PCA Step by Step", url: "https://youtu.be/FgakZw6K1QQ", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — Decomposition", url: "https://scikit-learn.org/stable/modules/decomposition.html", platform: "Scikit-learn" },
            { type: "docs", title: "UMAP Documentation & Examples", url: "https://umap-learn.readthedocs.io/en/latest/", platform: "UMAP" }
          ]
        },
        {
          id: "feature-engineering",
          title: "Feature Engineering & Selection",
          description: "Feature creation, encoding categoricals, feature importance, mutual information",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "course", title: "Kaggle — Feature Engineering", url: "https://www.kaggle.com/learn/feature-engineering", platform: "Kaggle" },
            { type: "video", title: "Feature Engineering Full Tutorial — Krish Naik", url: "https://youtu.be/6WDFfaYtN6s", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — Feature Selection", url: "https://scikit-learn.org/stable/modules/feature_selection.html", platform: "Scikit-learn" }
          ]
        },
        {
          id: "model-evaluation",
          title: "Model Evaluation & Metrics",
          description: "Accuracy, precision, recall, F1, ROC-AUC, confusion matrix, RMSE, MAE, R²",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "StatQuest — ROC and AUC", url: "https://youtu.be/4jRBRDbJemM", platform: "YouTube" },
            { type: "docs", title: "Scikit-learn — Model Evaluation", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", platform: "Scikit-learn" },
            { type: "course", title: "Google ML Crash Course — Evaluation", url: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall", platform: "Google" }
          ]
        },
        {
          id: "cross-validation-tuning",
          title: "Cross-Validation & Hyperparameter Tuning",
          description: "K-fold CV, stratified split, GridSearchCV, RandomizedSearch, Optuna",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Scikit-learn — Cross-Validation", url: "https://scikit-learn.org/stable/modules/cross_validation.html", platform: "Scikit-learn" },
            { type: "docs", title: "Optuna Documentation", url: "https://optuna.readthedocs.io/en/stable/", platform: "Optuna" },
            { type: "video", title: "Hyperparameter Tuning — Krish Naik", url: "https://youtu.be/5nYqK-HaoKY", platform: "YouTube" }
          ]
        },
        {
          id: "anomaly-detection",
          title: "Anomaly Detection",
          description: "Isolation Forest, One-Class SVM, statistical approaches, autoencoders for anomaly detection",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Scikit-learn — Outlier Detection", url: "https://scikit-learn.org/stable/modules/outlier_detection.html", platform: "Scikit-learn" },
            { type: "video", title: "Anomaly Detection — Krish Naik", url: "https://youtu.be/Oz3L0pRknBk", platform: "YouTube" },
            { type: "docs", title: "PyOD Library Documentation", url: "https://pyod.readthedocs.io/en/latest/", platform: "PyOD" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 4 — Data Engineering
    // ============================================================
    {
      id: "phase-4",
      number: 4,
      title: "Data Engineering",
      description: "Build the infrastructure that powers data-driven applications at scale",
      icon: "database",
      topics: [
        {
          id: "etl-elt",
          title: "ETL / ELT Concepts & Pipelines",
          description: "Extract-Transform-Load vs Extract-Load-Transform, batch vs streaming, pipeline patterns",
          sources: ["data-engineer"],
          resources: [
            { type: "video", title: "ETL vs ELT Explained — Seattle Data Guy", url: "https://youtu.be/oF2M7yYnbpA", platform: "YouTube" },
            { type: "course", title: "DataTalks — Data Engineering Zoomcamp (Week 2)", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp", platform: "DataTalks" },
            { type: "tutorial", title: "ETL Pipeline Best Practices", url: "https://www.startdataengineering.com/post/how-to-build-a-data-pipeline/", platform: "Blog" }
          ]
        },
        {
          id: "airflow",
          title: "Apache Airflow — Workflow Orchestration",
          description: "DAGs, operators, sensors, XComs, scheduling, monitoring, TaskFlow API",
          sources: ["data-engineer"],
          resources: [
            { type: "docs", title: "Apache Airflow Documentation", url: "https://airflow.apache.org/docs/", platform: "Airflow" },
            { type: "video", title: "Airflow Tutorial for Beginners — Marc Lamberti", url: "https://youtu.be/K9AnJ9_ZAXE", platform: "YouTube" },
            { type: "course", title: "Astronomer — Airflow Tutorials", url: "https://docs.astronomer.io/learn", platform: "Astronomer" }
          ]
        },
        {
          id: "spark-pyspark",
          title: "Apache Spark & PySpark",
          description: "RDDs, DataFrames, Spark SQL, transformations, actions, partitioning, joins at scale",
          sources: ["data-engineer", "ai-data-scientist"],
          resources: [
            { type: "video", title: "PySpark Tutorial — freeCodeCamp", url: "https://youtu.be/_C8kWso4ne4", platform: "YouTube" },
            { type: "docs", title: "PySpark Documentation", url: "https://spark.apache.org/docs/latest/api/python/", platform: "Spark" },
            { type: "course", title: "DataTalks — Spark Week (Zoomcamp)", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp/tree/main/05-batch", platform: "DataTalks" }
          ]
        },
        {
          id: "kafka",
          title: "Apache Kafka — Data Streaming",
          description: "Producers, consumers, topics, partitions, consumer groups, exactly-once semantics",
          sources: ["data-engineer"],
          resources: [
            { type: "course", title: "Confluent Kafka Fundamentals (free)", url: "https://developer.confluent.io/courses/apache-kafka/events/", platform: "Confluent" },
            { type: "video", title: "Kafka in 100 Seconds + Tutorial — Fireship", url: "https://youtu.be/uvb00oaa3k8", platform: "YouTube" },
            { type: "docs", title: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/", platform: "Kafka" }
          ]
        },
        {
          id: "data-lakes-warehouses",
          title: "Data Lakes & Data Warehouses",
          description: "Lake vs Warehouse vs Lakehouse, partitioning strategies, file formats (Parquet, Delta)",
          sources: ["data-engineer"],
          resources: [
            { type: "video", title: "Data Lake vs Data Warehouse — Seattle Data Guy", url: "https://youtu.be/-bSkREem8dM", platform: "YouTube" },
            { type: "docs", title: "Delta Lake Documentation", url: "https://docs.delta.io/latest/index.html", platform: "Delta Lake" },
            { type: "tutorial", title: "Data Lakehouse Explained — Databricks", url: "https://www.databricks.com/glossary/data-lakehouse", platform: "Databricks" }
          ]
        },
        {
          id: "nosql",
          title: "NoSQL Databases (MongoDB, Redis)",
          description: "Document stores, key-value stores, when to use NoSQL vs SQL, data modeling",
          sources: ["data-engineer"],
          resources: [
            { type: "course", title: "MongoDB University — Free Courses", url: "https://university.mongodb.com/", platform: "MongoDB" },
            { type: "video", title: "Redis Crash Course — Traversy Media", url: "https://youtu.be/Hbt56gFj998", platform: "YouTube" },
            { type: "docs", title: "MongoDB Manual", url: "https://www.mongodb.com/docs/manual/", platform: "MongoDB" }
          ]
        },
        {
          id: "cloud-storage",
          title: "Cloud Storage Concepts (S3, GCS, Azure Blob)",
          description: "Object storage, buckets, IAM, lifecycle policies, cloud cost management basics",
          sources: ["data-engineer", "ai-engineer"],
          resources: [
            { type: "docs", title: "AWS S3 Documentation", url: "https://docs.aws.amazon.com/s3/", platform: "AWS" },
            { type: "course", title: "Google Cloud Skills Boost — Free Labs", url: "https://www.cloudskillsboost.google/", platform: "Google" },
            { type: "video", title: "Cloud Computing Full Course — freeCodeCamp", url: "https://youtu.be/M988_fsOSWo", platform: "YouTube" }
          ]
        },
        {
          id: "dbt",
          title: "dbt (Data Build Tool)",
          description: "Models, tests, documentation, sources, snapshots, Jinja templating",
          sources: ["data-engineer"],
          resources: [
            { type: "course", title: "dbt Fundamentals (free course)", url: "https://courses.getdbt.com/courses/fundamentals", platform: "dbt" },
            { type: "docs", title: "dbt Documentation", url: "https://docs.getdbt.com/", platform: "dbt" },
            { type: "tutorial", title: "Jaffle Shop — dbt Tutorial Project", url: "https://github.com/dbt-labs/jaffle-shop", platform: "GitHub" }
          ]
        },
        {
          id: "data-quality",
          title: "Data Quality & Testing",
          description: "Great Expectations, data contracts, schema validation, data freshness monitoring",
          sources: ["data-engineer"],
          resources: [
            { type: "docs", title: "Great Expectations Documentation", url: "https://docs.greatexpectations.io/", platform: "GX" },
            { type: "video", title: "Data Quality — Seattle Data Guy", url: "https://youtu.be/wDwD2CQvKLk", platform: "YouTube" },
            { type: "tutorial", title: "Data Contracts Explained", url: "https://www.startdataengineering.com/post/data-contracts/", platform: "Blog" }
          ]
        },
        {
          id: "docker-for-data",
          title: "Docker for Data",
          description: "Containers, Dockerfile, docker-compose, containerizing data pipelines",
          sources: ["data-engineer", "ai-engineer"],
          resources: [
            { type: "video", title: "Docker Tutorial for Beginners — TechWorld with Nana", url: "https://youtu.be/3c-iBn73dDE", platform: "YouTube" },
            { type: "docs", title: "Docker Official Getting Started", url: "https://docs.docker.com/get-started/", platform: "Docker" },
            { type: "course", title: "DataTalks — Docker Week (Zoomcamp)", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp/tree/main/01-docker-terraform", platform: "DataTalks" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 5 — Deep Learning
    // ============================================================
    {
      id: "phase-5",
      number: 5,
      title: "Deep Learning",
      description: "Neural networks from theory to implementation — CNNs, RNNs, and beyond",
      icon: "layers",
      topics: [
        {
          id: "neural-networks",
          title: "Neural Networks Fundamentals",
          description: "Perceptrons, activation functions, forward pass, backpropagation, gradient descent variants",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "Neural Networks — 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", platform: "YouTube" },
            { type: "course", title: "fast.ai — Practical Deep Learning Part 1", url: "https://course.fast.ai/", platform: "fast.ai" },
            { type: "book", title: "Neural Networks and Deep Learning — Michael Nielsen (free)", url: "http://neuralnetworksanddeeplearning.com/", platform: "Online Book" }
          ]
        },
        {
          id: "pytorch",
          title: "PyTorch",
          description: "Tensors, autograd, nn.Module, DataLoader, training loops, GPU acceleration",
          sources: ["machine-learning", "ai-data-scientist", "ai-engineer"],
          resources: [
            { type: "docs", title: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", platform: "PyTorch" },
            { type: "video", title: "PyTorch for Deep Learning — freeCodeCamp", url: "https://youtu.be/V_xro1bcAuA", platform: "YouTube" },
            { type: "book", title: "Dive into Deep Learning (d2l.ai) — PyTorch", url: "https://d2l.ai/", platform: "d2l.ai" }
          ]
        },
        {
          id: "tensorflow-keras",
          title: "TensorFlow & Keras",
          description: "Sequential/Functional API, tf.data, TensorBoard, SavedModel, TF Lite",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "TensorFlow Official Tutorials", url: "https://www.tensorflow.org/tutorials", platform: "TensorFlow" },
            { type: "video", title: "TensorFlow Developer Certificate Course — freeCodeCamp", url: "https://youtu.be/tPYj3fFJGjk", platform: "YouTube" },
            { type: "docs", title: "Keras Getting Started", url: "https://keras.io/getting_started/", platform: "Keras" }
          ]
        },
        {
          id: "cnns",
          title: "CNNs (Convolutional Neural Networks)",
          description: "Convolution operation, pooling, architectures (ResNet, VGG, EfficientNet), image classification",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "course", title: "CS231n — CNNs for Visual Recognition (Stanford)", url: "http://cs231n.stanford.edu/", platform: "Stanford" },
            { type: "video", title: "CNNs Explained — StatQuest", url: "https://youtu.be/HGwBXDKFk9I", platform: "YouTube" },
            { type: "tutorial", title: "PyTorch — CIFAR-10 Classifier Tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html", platform: "PyTorch" }
          ]
        },
        {
          id: "rnns-lstms",
          title: "RNNs, LSTMs & GRUs",
          description: "Sequential data processing, vanishing gradients, gated units, bidirectional RNNs",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "RNN & LSTM Explained — StatQuest", url: "https://youtu.be/AsNTP8Kwu80", platform: "YouTube" },
            { type: "tutorial", title: "Understanding LSTM Networks — Colah's Blog", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", platform: "Blog" },
            { type: "docs", title: "PyTorch RNN Tutorial", url: "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html", platform: "PyTorch" }
          ]
        },
        {
          id: "transfer-learning",
          title: "Transfer Learning & Fine-tuning",
          description: "Pretrained models, feature extraction, fine-tuning strategies, domain adaptation",
          sources: ["machine-learning", "ai-data-scientist", "ai-engineer"],
          resources: [
            { type: "docs", title: "PyTorch — Transfer Learning Tutorial", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html", platform: "PyTorch" },
            { type: "course", title: "fast.ai — Fine-tuning Models", url: "https://course.fast.ai/", platform: "fast.ai" },
            { type: "tutorial", title: "Hugging Face — Fine-tuning a Pretrained Model", url: "https://huggingface.co/docs/transformers/training", platform: "Hugging Face" }
          ]
        },
        {
          id: "regularization",
          title: "Regularization Techniques",
          description: "Dropout, BatchNorm, LayerNorm, L1/L2, data augmentation, early stopping",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "Dropout Explained — StatQuest", url: "https://youtu.be/ARq74QuavAo", platform: "YouTube" },
            { type: "tutorial", title: "Batch Normalization — Machine Learning Mastery", url: "https://machinelearningmastery.com/batch-normalization-for-training-of-deep-learning-neural-networks/", platform: "ML Mastery" },
            { type: "docs", title: "PyTorch — Dropout Layers", url: "https://pytorch.org/docs/stable/nn.html#dropout-layers", platform: "PyTorch" }
          ]
        },
        {
          id: "optimizers",
          title: "Optimizers (Adam, AdamW, SGD)",
          description: "Momentum, learning rate schedulers, AdamW weight decay, gradient clipping",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "video", title: "Optimizers Explained — StatQuest", url: "https://youtu.be/mdKjMPmcWjY", platform: "YouTube" },
            { type: "tutorial", title: "Sebastian Ruder — Optimizer Overview", url: "https://ruder.io/optimizing-gradient-descent/", platform: "Blog" },
            { type: "docs", title: "PyTorch Optimizers", url: "https://pytorch.org/docs/stable/optim.html", platform: "PyTorch" }
          ]
        },
        {
          id: "nlp-fundamentals",
          title: "NLP Fundamentals (Pre-Transformer)",
          description: "Tokenization, TF-IDF, Word2Vec, GloVe, text preprocessing, sentiment analysis",
          sources: ["machine-learning", "ai-data-scientist"],
          resources: [
            { type: "course", title: "Stanford CS224n — NLP with Deep Learning", url: "http://web.stanford.edu/class/cs224n/", platform: "Stanford" },
            { type: "video", title: "NLP Zero to Hero — TensorFlow", url: "https://youtube.com/playlist?list=PLQY2H8rRoyvzDbLUZkbudP-MFQZwNmU4S", platform: "YouTube" },
            { type: "docs", title: "spaCy 101 — Getting Started", url: "https://spacy.io/usage/spacy-101", platform: "spaCy" }
          ]
        },
        {
          id: "time-series",
          title: "Time Series Models (ARIMA, Prophet)",
          description: "Stationarity, ACF/PACF, ARIMA, SARIMA, Prophet, forecasting evaluation",
          sources: ["ai-data-scientist", "data-analyst"],
          resources: [
            { type: "docs", title: "Prophet Documentation — Meta", url: "https://facebook.github.io/prophet/", platform: "Meta" },
            { type: "tutorial", title: "Time Series with Python — ML Mastery", url: "https://machinelearningmastery.com/time-series-forecasting-methods-in-python-cheat-sheet/", platform: "ML Mastery" },
            { type: "video", title: "Time Series Analysis — Ritvik Math", url: "https://youtube.com/playlist?list=PLvcbYUQ5t0UHOLnBzl46_Q6QKtFgfMGc3", platform: "YouTube" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 6 — LLMs & Generative AI
    // ============================================================
    {
      id: "phase-6",
      number: 6,
      title: "LLMs & Generative AI",
      description: "The cutting edge — Transformers, large language models, and AI applications",
      icon: "sparkles",
      topics: [
        {
          id: "transformers",
          title: "Transformer Architecture",
          description: "Self-attention, multi-head attention, positional encoding, encoder-decoder, BERT vs GPT",
          sources: ["ai-engineer", "ai-data-scientist", "machine-learning"],
          resources: [
            { type: "tutorial", title: "The Illustrated Transformer — Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", platform: "Blog" },
            { type: "video", title: "Attention is All You Need — Paper Explained", url: "https://youtu.be/iDulhoQ2pro", platform: "YouTube" },
            { type: "course", title: "Hugging Face — NLP Course (free)", url: "https://huggingface.co/learn/nlp-course", platform: "Hugging Face" }
          ]
        },
        {
          id: "huggingface",
          title: "Hugging Face Ecosystem",
          description: "Transformers library, datasets, tokenizers, model hub, inference API, Spaces",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "course", title: "Hugging Face NLP Course — Full", url: "https://huggingface.co/learn/nlp-course", platform: "Hugging Face" },
            { type: "docs", title: "Transformers Documentation", url: "https://huggingface.co/docs/transformers", platform: "Hugging Face" },
            { type: "video", title: "Hugging Face Crash Course — freeCodeCamp", url: "https://youtu.be/QEaBAZQCtwE", platform: "YouTube" }
          ]
        },
        {
          id: "prompt-engineering",
          title: "Prompt Engineering",
          description: "Zero-shot, few-shot, chain-of-thought, system prompts, prompt templates, best practices",
          sources: ["ai-engineer"],
          resources: [
            { type: "tutorial", title: "Prompt Engineering Guide — DAIR.AI", url: "https://www.promptingguide.ai/", platform: "DAIR.AI" },
            { type: "course", title: "ChatGPT Prompt Engineering for Devs — DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", platform: "DeepLearning.AI" },
            { type: "docs", title: "OpenAI — Prompt Engineering Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering", platform: "OpenAI" }
          ]
        },
        {
          id: "rag",
          title: "RAG (Retrieval-Augmented Generation)",
          description: "Document chunking, embedding, vector search, retrieval pipeline, RAG evaluation",
          sources: ["ai-engineer"],
          resources: [
            { type: "tutorial", title: "RAG from Scratch — LangChain", url: "https://github.com/langchain-ai/rag-from-scratch", platform: "GitHub" },
            { type: "video", title: "RAG Explained — James Briggs", url: "https://youtu.be/T-D1OfcDW1M", platform: "YouTube" },
            { type: "course", title: "Building RAG Agents — DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/", platform: "DeepLearning.AI" }
          ]
        },
        {
          id: "vector-databases",
          title: "Vector Databases & Embeddings",
          description: "Embedding models, similarity search, FAISS, Chroma, Pinecone, Weaviate, Qdrant",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "FAISS Documentation — Meta", url: "https://faiss.ai/", platform: "Meta" },
            { type: "docs", title: "ChromaDB Documentation", url: "https://docs.trychroma.com/", platform: "Chroma" },
            { type: "video", title: "Vector Databases Explained — Fireship", url: "https://youtu.be/klTvEwg3oJ4", platform: "YouTube" }
          ]
        },
        {
          id: "langchain-llamaindex",
          title: "LangChain & LlamaIndex",
          description: "Chains, agents, tools, memory, document loaders, LlamaIndex query engines",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", platform: "LangChain" },
            { type: "docs", title: "LlamaIndex Documentation", url: "https://docs.llamaindex.ai/", platform: "LlamaIndex" },
            { type: "video", title: "LangChain Crash Course — Tech With Tim", url: "https://youtu.be/LbT1yp6quS8", platform: "YouTube" }
          ]
        },
        {
          id: "llm-finetuning",
          title: "Fine-tuning LLMs (LoRA, QLoRA, PEFT)",
          description: "Parameter-efficient fine-tuning, LoRA adapters, QLoRA quantization, dataset preparation",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Hugging Face PEFT Library", url: "https://huggingface.co/docs/peft", platform: "Hugging Face" },
            { type: "tutorial", title: "Fine-tune LLaMA with QLoRA — Hugging Face Blog", url: "https://huggingface.co/blog/4bit-transformers-bitsandbytes", platform: "Hugging Face" },
            { type: "video", title: "LoRA Fine-tuning Explained — Sam Witteveen", url: "https://youtu.be/YVU5wAA6Txo", platform: "YouTube" }
          ]
        },
        {
          id: "llm-evaluation",
          title: "LLM Evaluation & Benchmarks",
          description: "BLEU, ROUGE, perplexity, MMLU, HumanEval, LLM-as-judge, evaluation frameworks",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "Hugging Face — Evaluate Library", url: "https://huggingface.co/docs/evaluate", platform: "Hugging Face" },
            { type: "tutorial", title: "LLM Evaluation — Weights & Biases Guide", url: "https://wandb.ai/wandb_gen/llm-evaluation/reports/", platform: "W&B" },
            { type: "video", title: "How to Evaluate LLMs", url: "https://youtu.be/fRsMJx6Im14", platform: "YouTube" }
          ]
        },
        {
          id: "multimodal-ai",
          title: "Multimodal AI (Vision + Language + Audio)",
          description: "CLIP, LLaVA, Whisper, text-to-image, image captioning, multimodal transformers",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "OpenAI Whisper — GitHub", url: "https://github.com/openai/whisper", platform: "GitHub" },
            { type: "tutorial", title: "CLIP Explained — Hugging Face", url: "https://huggingface.co/docs/transformers/model_doc/clip", platform: "Hugging Face" },
            { type: "video", title: "Multimodal AI Explained — Yannic Kilcher", url: "https://youtu.be/5vfIT5LOkR0", platform: "YouTube" }
          ]
        },
        {
          id: "ai-agents",
          title: "AI Agents (ReAct, Tool Use, Function Calling)",
          description: "ReAct pattern, tool-use agents, function calling, multi-agent systems, agent frameworks",
          sources: ["ai-engineer"],
          resources: [
            { type: "tutorial", title: "Building AI Agents — LangChain Docs", url: "https://python.langchain.com/docs/modules/agents/", platform: "LangChain" },
            { type: "tutorial", title: "MetaGPT — Multi-Agent Framework", url: "https://github.com/geekan/MetaGPT", platform: "GitHub" },
            { type: "course", title: "AI Agents in LangGraph — DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", platform: "DeepLearning.AI" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 7 — MLOps & Deployment
    // ============================================================
    {
      id: "phase-7",
      number: 7,
      title: "MLOps & Deployment",
      description: "Ship models to production — APIs, containers, monitoring, and CI/CD",
      icon: "rocket",
      topics: [
        {
          id: "fastapi",
          title: "APIs with FastAPI",
          description: "REST endpoints, request/response models, async, middleware, serving ML predictions",
          sources: ["ai-engineer", "data-engineer"],
          resources: [
            { type: "docs", title: "FastAPI Official Tutorial", url: "https://fastapi.tiangolo.com/tutorial/", platform: "FastAPI" },
            { type: "video", title: "FastAPI Full Course — freeCodeCamp", url: "https://youtu.be/tLKKmouUams", platform: "YouTube" },
            { type: "tutorial", title: "Serving ML Models with FastAPI", url: "https://testdriven.io/blog/fastapi-machine-learning/", platform: "TestDriven" }
          ]
        },
        {
          id: "docker-containers",
          title: "Docker & Containers (Advanced)",
          description: "Multi-stage builds, docker-compose, volumes, networking, container registries",
          sources: ["data-engineer", "ai-engineer"],
          resources: [
            { type: "video", title: "Docker Deep Dive — TechWorld with Nana", url: "https://youtu.be/3c-iBn73dDE", platform: "YouTube" },
            { type: "docs", title: "Docker Documentation", url: "https://docs.docker.com/", platform: "Docker" },
            { type: "interactive", title: "Play with Docker — Online Lab", url: "https://labs.play-with-docker.com/", platform: "Docker" }
          ]
        },
        {
          id: "cicd-ml",
          title: "CI/CD for ML (GitHub Actions)",
          description: "Automated testing, model validation, deployment pipelines, GitHub Actions workflows",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions", platform: "GitHub" },
            { type: "video", title: "GitHub Actions Tutorial — TechWorld with Nana", url: "https://youtu.be/R8_veQiYBjI", platform: "YouTube" },
            { type: "tutorial", title: "CI/CD for Machine Learning — Made With ML", url: "https://madewithml.com/courses/mlops/cicd/", platform: "Made With ML" }
          ]
        },
        {
          id: "mlflow",
          title: "MLflow — Experiment Tracking & Model Registry",
          description: "Tracking experiments, logging metrics/artifacts, model versioning, model serving",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "MLflow Documentation", url: "https://mlflow.org/docs/latest/index.html", platform: "MLflow" },
            { type: "video", title: "MLflow Tutorial — DataTalks", url: "https://youtu.be/MiA7LQin9c8", platform: "YouTube" },
            { type: "tutorial", title: "MLflow Quickstart Guide", url: "https://mlflow.org/docs/latest/getting-started/index.html", platform: "MLflow" }
          ]
        },
        {
          id: "model-monitoring",
          title: "Model Monitoring (Data Drift & Concept Drift)",
          description: "Detecting distribution shift, monitoring prediction quality, Evidently AI, alerts",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "Evidently AI — Open Source ML Monitoring", url: "https://docs.evidentlyai.com/", platform: "Evidently" },
            { type: "video", title: "ML Monitoring Explained — DataTalks", url: "https://youtu.be/IjNrkqMYtIE", platform: "YouTube" },
            { type: "docs", title: "NannyML — Data Drift Detection", url: "https://nannyml.readthedocs.io/en/stable/", platform: "NannyML" }
          ]
        },
        {
          id: "kubernetes",
          title: "Kubernetes Basics",
          description: "Pods, deployments, services, scaling, kubectl, Helm basics for ML workloads",
          sources: ["ai-engineer", "data-engineer"],
          resources: [
            { type: "interactive", title: "Kubernetes Interactive Tutorial", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/", platform: "Kubernetes" },
            { type: "video", title: "Kubernetes Crash Course — TechWorld with Nana", url: "https://youtu.be/s_o8dwzRlu4", platform: "YouTube" },
            { type: "docs", title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/", platform: "Kubernetes" }
          ]
        },
        {
          id: "cloud-deploy",
          title: "Cloud Deployment (HF Spaces, Railway, GCP)",
          description: "Deploying models to Hugging Face Spaces, Railway, GCP Cloud Run, Streamlit Cloud",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "Hugging Face Spaces — Deploy with Gradio", url: "https://huggingface.co/docs/hub/spaces", platform: "Hugging Face" },
            { type: "docs", title: "Streamlit Cloud Documentation", url: "https://docs.streamlit.io/deploy", platform: "Streamlit" },
            { type: "tutorial", title: "Deploy ML on GCP Cloud Run", url: "https://cloud.google.com/run/docs/quickstarts", platform: "Google" }
          ]
        },
        {
          id: "ai-security",
          title: "AI Security (Prompt Injection, Adversarial Attacks)",
          description: "Prompt injection, jailbreaking, adversarial examples, guardrails, content filtering",
          sources: ["ai-engineer"],
          resources: [
            { type: "tutorial", title: "OWASP Top 10 for LLM Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", platform: "OWASP" },
            { type: "docs", title: "Guardrails AI — Documentation", url: "https://www.guardrailsai.com/docs", platform: "Guardrails" },
            { type: "tutorial", title: "LLM Security — Simon Willison", url: "https://simonwillison.net/2023/Apr/14/worst-that-can-happen/", platform: "Blog" }
          ]
        }
      ]
    },

    // ============================================================
    // PHASE 8 — Advanced Specialization
    // ============================================================
    {
      id: "phase-8",
      number: 8,
      title: "Advanced Specialization",
      description: "Frontier topics — RL, computer vision, responsible AI, and production optimization",
      icon: "trophy",
      topics: [
        {
          id: "reinforcement-learning",
          title: "Reinforcement Learning (Q-Learning, PPO)",
          description: "Markov decision processes, Q-learning, policy gradient, PPO, environments (Gymnasium)",
          sources: ["ai-data-scientist", "machine-learning"],
          resources: [
            { type: "course", title: "Spinning Up in Deep RL — OpenAI", url: "https://spinningup.openai.com/en/latest/", platform: "OpenAI" },
            { type: "course", title: "Hugging Face Deep RL Course", url: "https://huggingface.co/learn/deep-rl-course", platform: "Hugging Face" },
            { type: "book", title: "Sutton & Barto — RL: An Introduction (free online)", url: "http://incompleteideas.net/book/the-book.html", platform: "Online Book" }
          ]
        },
        {
          id: "computer-vision",
          title: "Computer Vision (YOLO, SAM, Stable Diffusion)",
          description: "Object detection, segmentation, image generation, diffusion models, vision transformers",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "Ultralytics YOLOv8 Documentation", url: "https://docs.ultralytics.com/", platform: "Ultralytics" },
            { type: "course", title: "Stable Diffusion from Scratch — fast.ai Part 2", url: "https://course.fast.ai/Lessons/part2.html", platform: "fast.ai" },
            { type: "docs", title: "Segment Anything Model (SAM) — Meta", url: "https://github.com/facebookresearch/segment-anything", platform: "GitHub" }
          ]
        },
        {
          id: "audio-speech",
          title: "AI for Audio & Speech (Whisper, TTS)",
          description: "Speech-to-text, text-to-speech, audio classification, speaker diarization",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "OpenAI Whisper — GitHub", url: "https://github.com/openai/whisper", platform: "GitHub" },
            { type: "course", title: "Hugging Face Audio Course", url: "https://huggingface.co/learn/audio-course", platform: "Hugging Face" },
            { type: "docs", title: "Coqui TTS — Open Source TTS", url: "https://github.com/coqui-ai/TTS", platform: "GitHub" }
          ]
        },
        {
          id: "gnns",
          title: "Graph Neural Networks (GNNs)",
          description: "Graph representation, message passing, GCN, GAT, PyG (PyTorch Geometric)",
          sources: ["ai-data-scientist"],
          resources: [
            { type: "course", title: "Stanford CS224W — ML with Graphs", url: "http://web.stanford.edu/class/cs224w/", platform: "Stanford" },
            { type: "docs", title: "PyTorch Geometric Documentation", url: "https://pytorch-geometric.readthedocs.io/", platform: "PyG" },
            { type: "tutorial", title: "A Gentle Introduction to GNNs — Distill.pub", url: "https://distill.pub/2021/gnn-intro/", platform: "Distill" }
          ]
        },
        {
          id: "responsible-ai",
          title: "Responsible AI (Bias, Fairness, Explainability)",
          description: "SHAP, LIME, fairness metrics, model cards, AI ethics frameworks, responsible deployment",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "docs", title: "SHAP Documentation", url: "https://shap.readthedocs.io/en/latest/", platform: "SHAP" },
            { type: "tutorial", title: "Google — Responsible AI Practices", url: "https://ai.google/responsibility/responsible-ai-practices/", platform: "Google" },
            { type: "docs", title: "AI Fairness 360 — IBM", url: "https://aif360.mybluemix.net/", platform: "IBM" }
          ]
        },
        {
          id: "production-optimization",
          title: "Production Optimization (Quantization, ONNX, TensorRT)",
          description: "Model quantization (INT8, FP16), ONNX export, TensorRT, latency optimization, distillation",
          sources: ["ai-engineer"],
          resources: [
            { type: "docs", title: "ONNX Runtime Documentation", url: "https://onnxruntime.ai/docs/", platform: "ONNX" },
            { type: "docs", title: "Hugging Face — Optimum (model optimization)", url: "https://huggingface.co/docs/optimum", platform: "Hugging Face" },
            { type: "docs", title: "TensorRT Documentation — NVIDIA", url: "https://developer.nvidia.com/tensorrt", platform: "NVIDIA" }
          ]
        },
        {
          id: "ai-use-cases",
          title: "AI Use Cases by Industry",
          description: "Healthcare, finance, retail, manufacturing, NLP products, recommender systems",
          sources: ["ai-engineer", "ai-data-scientist"],
          resources: [
            { type: "tutorial", title: "Applied ML — Eugene Yan (curated list)", url: "https://github.com/eugeneyan/applied-ml", platform: "GitHub" },
            { type: "course", title: "AI for Medicine — DeepLearning.AI (Coursera audit)", url: "https://www.coursera.org/specializations/ai-for-medicine", platform: "Coursera" },
            { type: "course", title: "Full Stack Deep Learning — Course", url: "https://fullstackdeeplearning.com/course/", platform: "FSDL" }
          ]
        }
      ]
    }
  ],

  // ============================================================
  // CHECKPOINTS
  // ============================================================
  checkpoints: [
    {
      id: "checkpoint-1",
      afterPhase: 0,
      title: "Checkpoint #1 — Python & Fundamentals",
      description: "Build a project demonstrating mastery of Python, Git, and logical thinking.",
      projects: [
        { title: "30 Days of Python — Asabeneh", url: "https://github.com/Asabeneh/30-Days-Of-Python", type: "repo" },
        { title: "CS50P — Final Project", url: "https://cs50.harvard.edu/python/2022/project/", type: "project" },
        { title: "Project-Based Learning — Python Section", url: "https://github.com/tuvtran/project-based-learning#python", type: "repo" },
        { title: "Kaggle — Python Course & Exercises", url: "https://www.kaggle.com/learn/python", type: "course" },
        { title: "Build a CLI Tool from Scratch — Real Python", url: "https://realpython.com/python-command-line-arguments/", type: "tutorial" }
      ]
    },
    {
      id: "checkpoint-2",
      afterPhase: 1,
      title: "Checkpoint #2 — Data Analysis Project",
      description: "Perform a complete data analysis: collect, clean, explore, visualize, and tell a story with data.",
      projects: [
        { title: "Titanic Dataset — Kaggle EDA", url: "https://www.kaggle.com/competitions/titanic", type: "course" },
        { title: "Analyzing 911 Calls — Pandas Project", url: "https://github.com/Pierian-Data/Complete-Python-3-Bootcamp", type: "repo" },
        { title: "SQL Murder Mystery", url: "https://mystery.knightlab.com/", type: "interactive" },
        { title: "COVID-19 Data Analysis (Our World in Data)", url: "https://github.com/owid/covid-19-data", type: "repo" },
        { title: "Maven Analytics — Free Practice Datasets", url: "https://www.mavenanalytics.io/data-playground", type: "tutorial" },
        { title: "DataTalks Club — Data Analysis Projects", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp", type: "repo" }
      ]
    },
    {
      id: "checkpoint-3",
      afterPhase: 2,
      title: "Checkpoint #3 — Business Intelligence Dashboard",
      description: "Build interactive dashboards that deliver actionable business insights.",
      projects: [
        { title: "Microsoft Power BI Guided Learning", url: "https://learn.microsoft.com/en-us/power-bi/guided-learning/", type: "course" },
        { title: "Guy in a Cube — Build Dashboard from Scratch", url: "https://youtube.com/@GuyInACube", type: "tutorial" },
        { title: "Looker Studio — Google Analytics Dashboard", url: "https://lookerstudio.google.com/gallery", type: "tutorial" },
        { title: "Tableau Public — Superstore Dashboard", url: "https://public.tableau.com/app/discover/viz-of-the-day", type: "tutorial" },
        { title: "SQLBI — Contoso Sales Analysis (DAX)", url: "https://github.com/sql-bi/Contoso-Data-Generator", type: "repo" }
      ]
    },
    {
      id: "checkpoint-4",
      afterPhase: 3,
      title: "Checkpoint #4 — End-to-End ML Project",
      description: "Build a complete ML pipeline: data ingestion, preprocessing, model training, evaluation, and prediction.",
      projects: [
        { title: "House Prices Prediction — Kaggle Competition", url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques", type: "course" },
        { title: "Made With ML — End-to-End ML Project", url: "https://madewithml.com/courses/mlops/", type: "tutorial" },
        { title: "ML From Scratch — eriklindernoren", url: "https://github.com/eriklindernoren/ML-From-Scratch", type: "repo" },
        { title: "Credit Card Fraud Detection — Kaggle", url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud", type: "course" },
        { title: "Customer Segmentation with K-Means", url: "https://www.kaggle.com/code/kushal1996/customer-segmentation-k-means-analysis", type: "tutorial" },
        { title: "Hands-On ML — Aurélien Géron Notebooks", url: "https://github.com/ageron/handson-ml3", type: "repo" }
      ]
    },
    {
      id: "checkpoint-5",
      afterPhase: 4,
      title: "Checkpoint #5 — Data Engineering Pipeline",
      description: "Build an end-to-end data pipeline: ingest, transform, store, and orchestrate.",
      projects: [
        { title: "DataTalks — Data Engineering Zoomcamp (Final)", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp", type: "repo" },
        { title: "Build an Airflow ETL Pipeline from Scratch", url: "https://github.com/soumilshah1995/learn-Apache-Airflow", type: "repo" },
        { title: "PySpark + NYC Taxi Data Project", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp/tree/main/05-batch", type: "tutorial" },
        { title: "dbt + BigQuery — Jaffle Shop Tutorial", url: "https://github.com/dbt-labs/jaffle-shop", type: "repo" },
        { title: "End-to-End Pipeline — Docker + Postgres + Airflow", url: "https://github.com/josephmachado/beginner_de_project", type: "repo" }
      ]
    },
    {
      id: "checkpoint-6",
      afterPhase: 5,
      title: "Checkpoint #6 — Deep Learning Project",
      description: "Train and evaluate a deep learning model on a real-world problem.",
      projects: [
        { title: "fast.ai — Course Projects", url: "https://course.fast.ai/", type: "course" },
        { title: "PyTorch Image Classifier from Scratch", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html", type: "tutorial" },
        { title: "LSTM Time Series Prediction", url: "https://github.com/jaungiers/LSTM-Neural-Network-for-Time-Series-Prediction", type: "repo" },
        { title: "Sentiment Analysis with PyTorch", url: "https://github.com/bentrevett/pytorch-sentiment-analysis", type: "repo" },
        { title: "Dive into Deep Learning — d2l.ai Exercises", url: "https://d2l.ai/", type: "course" },
        { title: "Kaggle — Intro to Deep Learning + Competition", url: "https://www.kaggle.com/learn/intro-to-deep-learning", type: "course" }
      ]
    },
    {
      id: "checkpoint-7",
      afterPhase: 6,
      title: "Checkpoint #7 — LLM Application Project",
      description: "Build an application powered by large language models — chatbot, RAG, agent, or fine-tuned model.",
      projects: [
        { title: "Build a RAG Chatbot with LangChain + Chroma", url: "https://github.com/langchain-ai/langchain/tree/master/cookbook", type: "repo" },
        { title: "Fine-tune LLaMA with QLoRA — HF PEFT Examples", url: "https://github.com/huggingface/peft/tree/main/examples", type: "repo" },
        { title: "LLM Engineer Handbook — Practical Projects", url: "https://github.com/PacktPublishing/LLM-Engineers-Handbook", type: "repo" },
        { title: "Build an AI Agent from Scratch — MetaGPT", url: "https://github.com/geekan/MetaGPT", type: "repo" },
        { title: "Prompt Engineering Guide — Notebooks", url: "https://github.com/dair-ai/Prompt-Engineering-Guide", type: "repo" },
        { title: "OpenAI Cookbook — Applied Examples", url: "https://github.com/openai/openai-cookbook", type: "repo" }
      ]
    },
    {
      id: "checkpoint-8",
      afterPhase: 7,
      title: "Checkpoint #8 — Deploy a Complete AI System",
      description: "Deploy a production-ready AI application with API, monitoring, and CI/CD.",
      projects: [
        { title: "MLOps Zoomcamp — DataTalks (Final Project)", url: "https://github.com/DataTalksClub/mlops-zoomcamp", type: "repo" },
        { title: "Deploy ML Model with FastAPI + Docker", url: "https://github.com/alexeygrigorev/mlbookcamp-code", type: "repo" },
        { title: "Made With ML — MLOps End-to-End", url: "https://madewithml.com/", type: "tutorial" },
        { title: "MLflow — Track & Deploy a Real Model", url: "https://mlflow.org/docs/latest/tutorials-and-examples/", type: "tutorial" },
        { title: "Deploy on Hugging Face Spaces — Gradio App", url: "https://huggingface.co/docs/hub/spaces", type: "tutorial" }
      ]
    },
    {
      id: "checkpoint-9",
      afterPhase: 8,
      title: "Checkpoint #9 — Portfolio & Specialization Project",
      description: "Build a capstone project showcasing your full-stack AI skills — from data to deployment.",
      projects: [
        { title: "Applied ML Projects — eugeneyan", url: "https://github.com/eugeneyan/applied-ml", type: "repo" },
        { title: "Awesome Production ML — Ethical ML", url: "https://github.com/EthicalML/awesome-production-machine-learning", type: "repo" },
        { title: "Spinning Up in Deep RL — OpenAI", url: "https://spinningup.openai.com/en/latest/", type: "course" },
        { title: "Kaggle — Open Competition (your choice)", url: "https://www.kaggle.com/competitions", type: "course" },
        { title: "Awesome LLM Apps — Build & Deploy", url: "https://github.com/Shubhamsaboo/awesome-llm-apps", type: "repo" },
        { title: "SHAP Walkthrough — Model Explainability", url: "https://github.com/slundberg/shap", type: "repo" }
      ]
    }
  ]
};
