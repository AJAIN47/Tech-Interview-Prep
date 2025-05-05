// Core interface representing a company in the system
// Each company has basic information, interview patterns, career pages, and optional YouTube content
export interface Company {
  // Unique identifier for the company
  id: string;
  // Company name
  name: string;
  // URL to company logo
  logo: string;
  // Brief description of the company
  description: string;
  // Interview process details and patterns
  interviewPatterns: InterviewPattern;
  // Links to various career pages
  careerPages: CareerPages;
  // Optional array of YouTube videos related to the company
  youtubeVideos?: {
    // Title of the video
    title: string;
    // URL to the video
    url: string;
    // URL to video thumbnail
    thumbnail: string;
  }[];
}

// Interface defining the interview patterns and process for a company
export interface InterviewPattern {
  // Array of interview stages (e.g., Phone Screen, Onsite)
  stages: Stage[];
  // Array of question types commonly asked
  questionTypes: QuestionType[];
  // Average duration of the interview process
  averageDuration: string;
  // Optional additional notes about the interview process
  additionalNotes?: string;
}

// Interface representing an interview stage
export interface Stage {
  // Name of the interview stage (e.g., 'Phone Screen', 'Onsite Interview')
  name: string;
  // Description of what happens in this stage
  description: string;
}

// Interface representing a type of interview question
export interface QuestionType {
  // Type of question (e.g., 'System Design', 'Algorithms')
  type: string;
  // Frequency of this question type (Low, Medium, High)
  frequency: 'Low' | 'Medium' | 'High';
  // Description of what this question type entails
  description: string;
}

// Interface defining URLs to various career pages for a company
export interface CareerPages {
  // URL to software engineering career page
  softwareEngineering: string;
  // URL to data science career page
  dataScience: string;
  // URL to product management career page
  productManagement: string;
  // URL to business roles career page
  businessRoles: string;
}