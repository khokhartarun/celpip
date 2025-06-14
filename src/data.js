export const pageLinks = [
  { id: 1, href: "/", text: "home" },
  { id: 2, href: "/testdetails", text: "Test Details" },
  { id: 3, href: "/listening", text: "Listening" },
  { id: 4, href: "/speaking", text: "Speaking" },
  { id: 5, href: "/writing", text: "Writing" },
];

export const pages = [
  {
    title: "Test Details",
    href: "/testdetails",
    subOptions: [
      { title: "CELPIP Details", href: "/testdetails" },
      { title: "Test Format", href: "/testformat" },
      { title: "CLB Comparison", href: "/clbcomparison" },
      { title: "Scoring Criteria", href: "/scoringcriteria" },
      { title: "Band Descriptors", href: "/banddescriptors" },
    ],
  },
  { title: "Writing", href: "/writing", subOptions: [] },
  { title: "Speaking", href: "/speaking", subOptions: [] },
  { title: "Listening", href: "/listening", subOptions: [] },
  { title: "Reading", href: "/reading", subOptions: [] },
  { title: "FAQs", href: "/FAQs", subOptions: [] },
];

export const data = {
  PronunciationScore: 81.8,
  AccuracyScore: 91.0,
  ProsodyScore: 78.7,
  CompletenessScore: 100.0,
  FluencyScore: 82.0,
  TopicScore: 0.0,
  GrammarScore: 0.0,
  VocabularyScore: 20.0,
};

export const prompts = [
  {
    id: 1,
    prompt: "Hello, how are you?",
  },
  {
    id: 2,
    prompt: "Which conutry you had visited recetntly?",
  },
];

//TODO: Change praparation time and recording time for tasks
export const celpip_speaking_tasks_info = [
  {
    link_title: "Practice Task 1",
    task_type: "Task 1",
    task_type_without_space: "Task1",
    task_title: "Giving Advice",
    task_description: "You provide advice on a given situation, such as helping a friend choose between two options or suggesting ways to solve a problem.",
    preparationTime: 30, // in seconds
    recordingTime: 90, // in seconds
  },
  {
    link_title: "Practice Task 2",
    task_type: "Task 2",
    task_type_without_space: "Task2",
    task_title: "Talking about a Personal Experience",
    task_description: "You recount a personal experience related to a specific topic, like describing a memorable trip or an important life event.",
    preparationTime: 30, // in seconds
    recordingTime: 60, // in seconds
  },
  {
    link_title: "Practice Task 3",
    task_type: "Task 3",
    task_type_without_space: "Task3",
    task_title: "Describing a Scene",
    task_description: "You describe what is happening in an image, including details about the people, actions, and setting.",
    preparationTime: 30, // in seconds
    recordingTime: 60, // in seconds
  },
  {
    link_title: "Practice Task 4",
    task_type: "Task 4",
    task_type_without_space: "Task4",
    task_title: "Making Predictions",
    task_description: "You predict future outcomes based on a given scenario, such as what might happen in a changing environment or market trend.",
    preparationTime: 30, // in seconds
    recordingTime: 60, // in seconds
  },
  {
    link_title: "Practice Task 5",
    task_type: "Task 5",
    task_type_without_space: "Task5",
    task_title: "Comparing and Persuading",
    task_description: "You compare two options and persuade someone to choose one, often involving choices like products, services, or plans.",
    preparationTime: 60, // in seconds
    recordingTime: 60, // in seconds
  },
  {
    link_title: "Practice Task 6",
    task_type: "Task 6",
    task_type_without_space: "Task6",
    task_title: "Dealing with a Difficult Situation",
    task_description: "You explain how you would handle a challenging situation, such as resolving a conflict or managing a crisis.",
    preparationTime: 60, // in seconds
    recordingTime: 60, // in seconds
  },
  {
    link_title: "Practice Task 7",
    task_type: "Task 7",
    task_type_without_space: "Task7",
    task_title: "Expressing Opinions",
    task_description: "You express your opinion on a given topic, such as discussing whether a certain policy or trend is beneficial or harmful.",
    preparationTime: 30, // in seconds
    recordingTime: 90, // in seconds
  },
  {
    link_title: "Practice Task 8",
    task_type: "Task 8",
    task_type_without_space: "Task8",
    task_title: "Describing an Unusual Situation",
    task_description: "You describe an unusual or unexpected event and explain how you would react or handle it, such as encountering a strange occurrence or emergency.",
    preparationTime: 30, // in seconds
    recordingTime: 60, // in seconds
  },
];

//TODO: Update desciption 
export const celpip_writing_tasks_info = [
  {
    link_title: "Practice Task 1",
    task_type: "Task 1",
    task_type_without_space: "Task1",
    task_title: "Writing an Email",
    task_description: "In this task, you will write an email based on a given scenario. The email could be formal, semi-formal, or informal, and it typically requires you to request information, provide feedback, make a complaint, or give advice. Time given for this task is 27 minutes.",
    time_allowed: "27 minutes", 
  },
  {
    link_title: "Practice Task 2",
    task_type: "Task 2",
    task_type_without_space: "Task2",
    task_title: "Responding to Survey Questions",
    task_description: "This task involves responding to several questions in the form of a survey. The questions are based on a topic relevant to everyday life, such as work, travel, or community events, and you must express your opinion clearly and concisely.  Time allowed for this task is 26 minutes.",
    time_allowed: "26 minutes", 
  }
]

export const celpip_reading_tasks_info = [
  {
    task_type: "Task 1",
    task_title: "Reading Correspondence",
    task_description: "In this part, you will read two pieces of correspondence, typically in the form of letters or emails, and answer 11 multiple-choice questions. The first letter will contain general topics, such as a holiday or family event, and you'll need to answer six questions based on it. The second letter is a response to the first one, followed by five questions.",
    key_points: {
      "duration": "11 minutes",
      "focus": "11 (6 for the first letter, 5 for the response)",
      "tip": "Skim the letters, find key points, and look for paraphrased information."
    }
  },
  {
    task_type: "Task 2",
    task_title: "Reading to Apply a Diagram",
    task_description: "In this task, you'll see a diagram or graphic along with an email that responds to it. You need to refer to the diagram to fill in blanks in the email and answer multiple-choice questions. This task tests your ability to understand connections between visual data and written text.",
    key_points: {
      "duration": "9 minutes",
      "focus": "8 (5 fill-in-the-blanks, 3 multiple choice)",
      "tip": "Analyze the diagram, relate it to the email, and use the dropdown options to fill in the blanks."
    }
  },
  {
    task_type: "Task 3",
    task_title: "Reading for Information",
    task_description: "Here, you will read an informational text divided into four paragraphs. Your task is to match nine statements with the correct paragraphs. Some statements may not be supported by any paragraph, so the option 'Not Given' is also available. This task assesses your ability to extract specific information and understand the main ideas.",
    key_points: {
      "duration": "10 minutes",
      "focus": "9 (matching statements to paragraphs)",
      "tip": "Skim paragraphs for main topics, scan for keywords, and identify paraphrased information."
    }
  },
  {
    task_type: "Task 4",
    task_title: "Reading for Viewpoints",
    task_description: "This section involves reading an opinion article from a website, followed by a reader's comment on the article. You'll answer five multiple-choice questions about the article, and then five questions based on the reader's comment, where you will fill in the blanks with the best possible options. This task evaluates your ability to understand different perspectives and distinguish between fact and opinion.",
    key_points: {
      "duration": "13 minutes",
      "focus": "10 (5 for the article, 5 for the comment)",
      "tip": "Identify different viewpoints, skim for key ideas and names, and recognize paraphrased information."
    }
  }
]

export const celpip_listening_tasks_info = [
  {
    task_type: "Task 1",
    task_title: "Listening to Problem Solving",
    task_description: "You will listen to a conversation where one person presents a problem, and the other offers a solution. The conversation is divided into three sections, and you will answer a total of eight multiple-choice questions.",
    key_points: {
      "duration": "~8 minutes",
      "focus": "Identifying the problem, the solution provided, and key details such as the speaker's attitude or tone.",
      "tip": "Listen carefully to who has the problem and what they need. Pay attention to the advice or suggestions and infer any unstated details."
    }
  },
  {
    task_type: "Task 2",
    task_title: "Listening to a Daily Life Conversation",
    task_description: "This part involves a short conversation about a common, everyday situation, such as between co-workers or neighbors. You will answer five multiple-choice questions after hearing the dialogue.",
    key_points: {
      "duration": "~5 minutes",
      "focus": "Understanding the main ideas and identifying key details in typical social interactions.",
      "tip": "Take note of who is speaking, the situation, and the main topic. Be prepared for paraphrased ideas in the answer options."
    }
  },
  {
    task_type: "Task 3",
    task_title: "Listening for Information",
    task_description: "You will listen to a conversation where one speaker shares specialized knowledge on a topic. The dialogue lasts about two minutes, and you will answer six multiple-choice questions.",
    key_points: {
      "duration": "~6 minutes",
      "focus": "Following the sequence of events and identifying specific information or facts.",
      "tip": "Take notes on the key facts and try to infer answers when necessary. Pay attention to the details shared by the expert speaker."
    }
  },
  {
    task_type: "Task 4",
    task_title: "Listening to a News Item",
    task_description: "In this part, you will listen to a news report delivered by a single speaker. The report lasts about one to one-and-a-half minutes, followed by five multiple-choice questions.",
    key_points: {
      "duration": "~5 minutes",
      "focus": "Comprehending the main events, understanding the sequence of occurrences, and identifying key details.",
      "tip": "Focus on who, what, where, and when. Take notes on the most important aspects of the news report and pay attention to time references."
    }
  },
  {
    task_type: "Task 5",
    task_title: "Listening to a Discussion",
    task_description: "This task involves watching a video of three people discussing a topic. You will then answer eight multiple-choice questions based on the discussion.",
    key_points: {
      "duration": "~6 minutes",
      "focus": "Understanding the opinions, feelings, and ideas shared by different speakers in a group conversation.",
      "tip": "Watch for visual cues, such as body language and facial expressions, to help distinguish between speakers and their opinions."
    }
  },
  {
    task_type: "Task 6",
    task_title: "Listening for Viewpoints",
    task_description: "You will listen to a single speaker presenting two or more viewpoints on a complex social issue. The monologue lasts about three minutes, and you will answer six multiple-choice questions.",
    key_points: {
      "duration": "~8 minutes",
      "focus": "Understanding abstract ideas and different opinions, recognizing main ideas, and inferring conclusions.",
      "tip": "Take detailed notes on each viewpoint mentioned, and be prepared for paraphrased ideas in the questions. Use your reasoning skills to infer the correct answers."
    }
  }
]

export const readingTasks = {
  'reading-for-information': [
    {
      id: 1,
      passage: "The Canadian healthcare system, often referred to as Medicare, is a publicly funded healthcare system that provides universal coverage to all Canadian citizens and permanent residents. The system is primarily funded through general tax revenues, with some provinces also using premiums and co-payments. Each province and territory administers its own healthcare system, following the guidelines set by the Canada Health Act of 1984.",
      question: "What is the main source of funding for the Canadian healthcare system?",
      options: [
        "Private insurance premiums",
        "General tax revenues",
        "Patient co-payments",
        "Provincial taxes only"
      ],
      correctAnswer: "General tax revenues",
      explanation: "The passage explicitly states that the Canadian healthcare system is 'primarily funded through general tax revenues'."
    },
    {
      id: 2,
      passage: "The Great Barrier Reef, located off the coast of Australia, is the world's largest coral reef system. It stretches for over 2,300 kilometers and is home to thousands of marine species. The reef is facing significant threats from climate change, including rising sea temperatures and ocean acidification, which can cause coral bleaching and affect the entire ecosystem.",
      question: "What is the main threat to the Great Barrier Reef mentioned in the passage?",
      options: [
        "Overfishing",
        "Tourism",
        "Climate change",
        "Pollution"
      ],
      correctAnswer: "Climate change",
      explanation: "The passage specifically mentions that the reef is 'facing significant threats from climate change' and describes the related effects."
    }
  ],
  'reading-for-main-idea': [
    {
      id: 1,
      passage: "The rise of remote work has transformed the modern workplace. Companies are now able to hire talent from anywhere in the world, while employees enjoy greater flexibility in their work schedules. This shift has led to increased productivity for many organizations and improved work-life balance for employees. However, it also presents challenges such as maintaining team cohesion and ensuring effective communication across different time zones.",
      question: "What is the main idea of this passage?",
      options: [
        "Remote work has only positive effects on companies",
        "Remote work has both benefits and challenges",
        "Remote work is causing communication problems",
        "Remote work is the future of all businesses"
      ],
      correctAnswer: "Remote work has both benefits and challenges",
      explanation: "The passage discusses both the advantages (global talent pool, flexibility, productivity) and challenges (team cohesion, communication) of remote work."
    }
  ],
  'reading-for-detail': [
    {
      id: 1,
      passage: "The new smartphone model features a 6.7-inch OLED display with a 120Hz refresh rate. It comes with 256GB of storage and 8GB of RAM. The device is powered by the latest processor and includes a 5000mAh battery. The camera system consists of a 108MP main camera, a 12MP ultra-wide lens, and a 10MP telephoto lens.",
      question: "What is the storage capacity of the smartphone?",
      options: [
        "128GB",
        "256GB",
        "512GB",
        "1TB"
      ],
      correctAnswer: "256GB",
      explanation: "The passage explicitly states that the smartphone 'comes with 256GB of storage'."
    }
  ],
  'reading-for-inference': [
    {
      id: 1,
      passage: "The city's public transportation system has seen a significant increase in ridership over the past year. The number of daily commuters has risen by 25%, while the number of private vehicles on the road has decreased by 15%. The city has also reported a 10% reduction in air pollution levels during peak hours.",
      question: "What can be inferred about the relationship between public transportation and air pollution?",
      options: [
        "There is no relationship between them",
        "More public transportation leads to more air pollution",
        "Increased public transportation use may help reduce air pollution",
        "Air pollution is not affected by transportation choices"
      ],
      correctAnswer: "Increased public transportation use may help reduce air pollution",
      explanation: "The passage shows that as public transportation use increased and private vehicle use decreased, air pollution levels went down, suggesting a positive relationship between public transportation and air quality."
    }
  ]
};

