import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { ConsoleReport } from './reportTargets/consoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// creat obj that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// create instance of MatchReader & pass in satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
