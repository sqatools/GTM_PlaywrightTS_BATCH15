declare const ts: any;
declare const index_1: any;
declare const rawApiOptions: any;

const {
  fileExists = ts.sys.fileExists,
  readFile = ts.sys.readFile,
  skipProject = index_1.DEFAULTS.skipProject,
  project = index_1.DEFAULTS.project,
  tsTrace = index_1.DEFAULTS.tsTrace,
} = rawApiOptions ?? {};
