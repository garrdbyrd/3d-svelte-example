function parseTECFile(contents: string): number[][] {
    const lines = contents.split('\n'); // Split the file content into lines
    const data: number[][] = []; // Array to hold the parsed data
  
    // Start parsing from the first line of data, assuming the first two lines are headers
    for (let i = 2; i < lines.length; i++) {
      const line = lines[i].trim(); // Trim whitespace from the line
      if (line === '') continue; // Skip empty lines
  
      const values = line.split(/\s+/); // Split the line by whitespace to get the values
  
      // Convert the string values to numbers and add to the data array
      const point = values.map(value => parseFloat(value));
      data.push(point);
    }
  
    return data;
}

// import fs from 'fs';
// import readline from 'readline';

// function ReadTec(){

// interface TecData {
//   variables: string[];
//   data: number[][];
// }

// async function parseTecFile(filePath: string): Promise<TecData> {
//   const fileStream = fs.createReadStream(filePath);
//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
//   });

//   const tecData: TecData = { variables: [], data: [] };
//   let dataSectionStarted = false;

//   for await (const line of rl) {
//     // Skip empty lines and comments
//     if (line.trim() === '' || line.startsWith('#')) continue;

//     // Parse header for variable names
//     if (line.startsWith('VARIABLES')) {
//       const varLine = line.replace('VARIABLES = ', '').replace(/"/g, '');
//       tecData.variables = varLine.split(',').map((v) => v.trim());
//       continue;
//     }

//     // Detect start of data section - adjust based on your file format
//     if (line.startsWith('ZONE') || line.startsWith('DATAPACKING')) {
//       dataSectionStarted = true;
//       continue;
//     }

//     // Parse data lines
//     if (dataSectionStarted) {
//       const dataPoints = line.split(/\s+/).map(Number);
//       tecData.data.push(dataPoints);
//     }
//   }

//   return tecData;
// }
// }