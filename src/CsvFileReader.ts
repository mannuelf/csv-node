import fs from 'fs';
import { MatchResult } from './matchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

// abstract class, cannot be used to create an instance of an object
// abstract methods must be implimented by a child class
export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

}
