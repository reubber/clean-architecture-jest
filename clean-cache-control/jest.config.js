module.exports={
  roots:['<rootDir>/src'],
  testEnvironment: 'node',
  trasnform: {
    '.+\\.ts$': 'ts-jest'
  },
  muduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}