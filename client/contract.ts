export type EndpointGetLastXDays_OutputOK = {
  date: string;
  relative_files: {
    [k: string]: number;
  };
  projects: {
    [k: string]: number;
  };
  languages: {
    [k: string]: number;
  };
  hourly: {
    [k: string]: number;
  };
  total_minutes: number;
  last_timestamp: number;
}[];
export type EndpointGetEachDay_OutputOK = {
  date: string;
  duration: number;
}[];

export interface Contract {
  getActivities: EndpointGetActivities;
  getStatistics: EndpointGetStatistics;
  getLastXDays: EndpointGetLastXDays;
  getTopProjects: EndpointGetTopProjects;
  getTopLanguages: EndpointGetTopLanguages;
  getEachDay: EndpointGetEachDay;
  getTimeDistribution: EndpointGetTimeDistribution;
  user: {
    minutes: EndpointUserMinutes;
  };
  eventLog: EndpointEventLog;
  readme: EndpointReadme;
}
export interface EndpointGetActivities {
  method: "get";
  input: {
    query?: EndpointGetActivities_InputQuery;
  };
  output: {
    OK: EndpointGetActivities_OutputOK;
  };
  media: null;
}
export interface EndpointGetActivities_InputQuery {
  year?: string;
}
export interface EndpointGetActivities_OutputOK {
  data: {
    date: string;
    count: number;
    level: number;
  }[];
  firstYear: number;
}
export interface EndpointGetStatistics {
  method: "get";
  input: {};
  output: {
    OK: EndpointGetStatistics_OutputOK;
  };
  media: null;
}
export interface EndpointGetStatistics_OutputOK {
  [k: string]: number;
}
export interface EndpointGetLastXDays {
  method: "get";
  input: {
    query?: EndpointGetLastXDays_InputQuery;
  };
  output: {
    OK: EndpointGetLastXDays_OutputOK;
  };
  media: null;
}
export interface EndpointGetLastXDays_InputQuery {
  days: string;
}
export interface EndpointGetTopProjects {
  method: "get";
  input: {
    query?: EndpointGetTopProjects_InputQuery;
  };
  output: {
    OK: EndpointGetTopProjects_OutputOK;
  };
  media: null;
}
export interface EndpointGetTopProjects_InputQuery {
  last: "24 hours" | "7 days" | "30 days";
}
export interface EndpointGetTopProjects_OutputOK {
  [k: string]: number;
}
export interface EndpointGetTopLanguages {
  method: "get";
  input: {
    query?: EndpointGetTopLanguages_InputQuery;
  };
  output: {
    OK: EndpointGetTopLanguages_OutputOK;
  };
  media: null;
}
export interface EndpointGetTopLanguages_InputQuery {
  last: "24 hours" | "7 days" | "30 days";
}
export interface EndpointGetTopLanguages_OutputOK {
  [k: string]: number;
}
export interface EndpointGetEachDay {
  method: "get";
  input: {};
  output: {
    OK: EndpointGetEachDay_OutputOK;
  };
  media: null;
}
export interface EndpointGetTimeDistribution {
  method: "get";
  input: {};
  output: {
    OK: EndpointGetTimeDistribution_OutputOK;
  };
  media: null;
}
export interface EndpointGetTimeDistribution_OutputOK {
  [k: string]: number;
}
export interface EndpointUserMinutes {
  method: "get";
  input: {
    query?: EndpointUserMinutes_InputQuery;
  };
  output: {
    OK: EndpointUserMinutes_OutputOK;
  };
  media: null;
}
export interface EndpointUserMinutes_InputQuery {
  minutes: string;
}
export interface EndpointUserMinutes_OutputOK {
  minutes: number;
}
export interface EndpointEventLog {
  method: "post";
  input: {
    body?: EndpointEventLog_InputBody;
  };
  output: {
    OK: EndpointEventLog_OutputOK;
  };
  media: null;
}
export interface EndpointEventLog_InputBody {
  [k: string]: unknown;
}
export interface EndpointEventLog_OutputOK {
  status: string;
  message: string;
}
export interface EndpointReadme {
  method: "get";
  input: {};
  output: any;
  media: null;
}
