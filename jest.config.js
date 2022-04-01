module.exports = {
  "preset": "jest-expo",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  ],
  // "reporters": [
	// "default",
	// ["./node_modules/jest-html-reporter", {
	// 	"pageTitle": "Test Report"
	// }]
  // ],
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
};
