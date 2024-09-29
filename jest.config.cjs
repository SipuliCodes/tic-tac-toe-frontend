module.exports = {
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom', 
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    }
};
