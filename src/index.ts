import { add } from './utils/math';
import { createUser } from './models/user';

console.log('GitHub MCP Test Project');

const sum = add(5, 10);
console.log(`Sum of 5 and 10 is: ${sum}`);

const user = createUser('testuser', 'test@example.com');
console.log('Created user:', user);
