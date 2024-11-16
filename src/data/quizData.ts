// src/data/quizData.ts
export interface QuizQuestion {
    question: string;
    options: string[];
    correct: number;
  }
  
  export interface QuizData {
    [key: number]: QuizQuestion[];
  }
  
  export const quizData: QuizData = {
    1: [
      {
        question: "Indian people named the plants and herbs as ______________ as they know the importance of it.",
        options: ["Folk remedies", "Mother nature", "Herbals", "Medicine"],
        correct: 2
      },
      {
        question: "The integration of indigenous knowledge with scientists' comparative competence of farmers includes:",
        options: ["Breeding and biotechnology", "Unrestricted by rapid experimental design", "Managing and adapting sequences", "Freedom to make progressive change"],
        correct: 0
      },
      {
        question: "Documentation means:",
        options: ["Collecting relevant scripts", "Creating information", "Collecting information into drawings, written script and audio recordings", "Circulating data or information"],
        correct: 2
      },
      {
        question: "The holistic form of life in biological variety is known as:",
        options: ["Herbal medicine", "Indigenous knowledge", "Traditional form of life", "Biodiversity"],
        correct: 3
      },
      {
        question: "Abbreviation of FSA?",
        options: ["Farming scheme agency", "Flexible spending account", "Farming system approach", "Food standard agency"],
        correct: 3
      },
      {
        question: "The seasonality-based practices related to restriction of fishing during breeding season:",
        options: ["Indigenous knowledge", "Traditional ecological knowledge", "Traditional value and ethics", "Traditional knowledge"],
        correct: 1
      },
      {
        question: "Simple technology and defined management principles are known as:",
        options: ["Traditional knowledge", "Traditional value and ethics", "Traditional water harvesting practices", "Indigenous knowledge"],
        correct: 2
      },
      {
        question: "Traditional knowledge gives scopes for the development of _______________ which is affordable treatment for poor:",
        options: ["Siddha", "Medicine", "Traditional medicine", "Ayurveda"],
        correct: 2
      },
      {
        question: "Indigenous knowledge is mostly useful for the sector:",
        options: ["Technical sector", "Skill set training", "Environmental development", "Agriculture"],
        correct: 3
      },
      {
        question: "During cough or cold according to traditional knowledge to get rid of it __________ is used:",
        options: ["Ginger", "Basil leaves", "Turmeric", "Neem"],
        correct: 0
      }
    ],
    2: [
      {
        question: "The process which undergoes changes from one society to another society and generation is known as:",
        options: ["Culture is transmitted", "Culture varies", "Culture is cumulative", "Culture is dynamic"],
        correct: 3
      },
      {
        question: "The element of culture is:",
        options: ["Beliefs, attitudes, knowledge, values", "Knowledge, attitude, language, ethics", "Values, knowledge, attitude, symbols", "Cognitive elements, beliefs, values, symbols, language"],
        correct: 0
      },
      {
        question: "The common way of greeting people in Indian customs:",
        options: ["Vannakam", "Nalvaravu", "Namaste", "Welcome"],
        correct: 2
      },
      {
        question: "The culture that makes ethical beings by bringing people closer to each other and teaches the values of:",
        options: ["Values, principles and norms", "Traditions, beliefs and spirituality", "Love, tolerance and peace", "Spiritual, philosophy and religion"],
        correct: 2
      },
      {
        question: "The important phase in the development of music during the sultanate period belongs to:",
        options: ["Amir Khusrau", "Swaramela Kalanidhi", "Qawwali", "Raja Mansingh"],
        correct: 0
      }
    ],
    3: [
      {
        question: "Sama Veda Consists of _________ ragas:",
        options: ["13000", "14000", "16000", "15000"],
        correct: 2
      },
      {
        question: "Guru Govind Singh is celebrated in Indian history as a unique combination of:",
        options: ["Saint, scholar, Warrior and a poet", "Saint, warrior and poet", "Saint, Writer, Warrior", "Saint, scholar, warrior and a writer"],
        correct: 0
      },
      {
        question: "What is the major contribution of Veda in health and Medicine?",
        options: ["Yoga", "Mindfulness", "Chakra healing", "Taittiriya Samhita"],
        correct: 0
      },
      {
        question: "In Buddhism, theory of the right holds that actions are right in so far as they promote the good which is also known as?",
        options: ["Desire", "Punishment", "Consequentialism", "Death"],
        correct: 2
      },
      {
        question: "How many Suttirams are in Tholkappiyam?",
        options: ["1710", "1720", "1610", "1620"],
        correct: 2
      }
    ],
    5: [
      {
        question: "_________ were well-versed in the manufacturing of gunpowder and its application in firearms in medieval period:",
        options: ["Ashoka", "Harappan", "Mughals", "Brahmagupta"],
        correct: 2
      },
      {
        question: "The earliest recorded art was inspired by religious Hindu background and it was later replaced by the popular ______ art:",
        options: ["Islam", "Buddhist", "Jainism", "Christianity"],
        correct: 1
      },
      {
        question: "Medieval painting is largely represented by the Mughal Empire during the period of:",
        options: ["10th-12th Century A.D.", "11th-16th Century A.D.", "16th-19th Century A.D.", "15th-20th Century A.D."],
        correct: 2
      },
      {
        question: "The _______ medical system is originated in southern India during 10th to 15th century:",
        options: ["Ayurveda", "Tibetan", "Siddha", "Unani"],
        correct: 2
      },
      {
        question: "Ballet does not include:",
        options: ["Music", "Staging", "Scenery", "Singing"],
        correct: 3
      },
      {
        question: "Used as tonics:",
        options: ["Tulsi", "Honey", "Ginger", "Golden seal"],
        correct: 0
      },
      {
        question: "What is the worship of lord Jagannath?",
        options: ["Performance of Odissi", "Performance of Gidda", "Performance of Kathak", "Performance of Garba"],
        correct: 0
      },
      {
        question: "Raja Ravi Varma achieved recognition for his paintings from the epics of:",
        options: ["Silappadikaram and Kumarasambava", "Raghuvamsa and Budhacharita", "Shishupala Vadha and Kiratarjuniya", "Mahabharata and Ramayana"],
        correct: 3
      },
      {
        question: "Syadhyaya refers to:",
        options: ["Cleanliness", "Self study", "Contentment", "Devotion to the Divine"],
        correct: 1
      },
      {
        question: "Saura paintings are also called as:",
        options: ["Akons", "Ikons", "Hekons", "Kons"],
        correct: 1
      }
    ],
    6: [
      {
        question: "Is the main tool to understand and analyse the indigenous knowledge:",
        options: ["Uniqueness", "Morality", "Choice of action", "Rationality"],
        correct: 3
      },
      {
        question: "Ubulwane means:",
        options: ["Animalhood", "Judgemental", "Being kind", "Informed consent"],
        correct: 0
      },
      {
        question: "Indigenous knowledge refers to:",
        options: [
          "Development of skills in society",
          "The particularization of information",
          "Improvising the livelihood of rural dwellers",
          "Practices and representations of local communities with histories of interaction with the natural environment"
        ],
        correct: 3
      },
      {
        question: "An indigenous knowledge brings out the power of:",
        options: ["Association and dissociation", "Movement and gestures", "Facts and reasoning", "Rationality"],
        correct: 0
      },
      {
        question: "The emergence of the traditional knowledge system is based on:",
        options: ["Technologies", "Traditional medicines", "Socio-cultural context", "Community development"],
        correct: 2
      },
      {
        question: "Under Section 37 of Biological Diversity Act, 2002 the State Government in consultation with local bodies may notify the areas of biodiversity importance as:",
        options: ["Biodiversity Reserves Sites", "Biodiversity Forest Sites", "Biodiversity Heritage Sites", "Biodiversity Resource Sites"],
        correct: 2
      },
      {
        question: "The underground sewage system was prominently increased during:",
        options: ["Mesopotamian civilization", "Harappan civilization", "Mayan civilization", "Egyptian civilization"],
        correct: 1
      },
      {
        question: "The physical body is called:",
        options: ["Vasanta", "Brahman", "Paramatma", "Annamaya Kosha"],
        correct: 3
      },
      {
        question: "What was established in 2003 by the Central Government to implement India's Biological Diversity Act:",
        options: ["The Biodiversity Reserve Management", "The State Biodiversity Boards", "The Biodiversity Management Committees", "The National Biodiversity Authority"],
        correct: 3
      },
      {
        question: "Regulate by granting approvals or otherwise requests for commercial utilization or bio-survey and bio-utilization of any biological resource by people is the function of:",
        options: ["The Biodiversity Management Committees", "The State Biodiversity Boards", "The Biodiversity Reserve Management", "The National Biodiversity Authority"],
        correct: 3
      }
    ]
  };