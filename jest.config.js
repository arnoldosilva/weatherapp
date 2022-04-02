module.exports = {
  "preset": "jest-expo",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  // "reporters": [
	// "default",
	// ["./node_modules/jest-html-reporter", {
	// 	"pageTitle": "Test Report"
	// }]
  // ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ],
  "coverageReporters": ["json", "html"],
};
