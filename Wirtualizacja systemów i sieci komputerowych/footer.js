/**
 * Your markdown-themeable-pdf custom footer.
 * After you have made any changes you need to reload or restart atom.
 *
 * The default file can be found in the folder ~/.atom/packages/markdown-themeable-pdf/templates
 *
 * @param Object For example: {fileInfo: base: "Demo.md", dir: ".../markdown-themeable-pdf/tests", ext: ".md", name: "Demo"}, root: "/", exportType: "pdf", destFileBase: "Demo.pdf", destFile: "......./markdown-themeable-pdf/tests/Demo.pdf"}
 * @returns Object {{height: string, contents: string}}
 */
module.exports = function (info) {
	return {
		height: '40',
		contents: '<div style="float:left; font-size:2.0em;">{{page}}/{{pages}}</div><div style="float:right; font-size:2.0em;">Iwo Bujkiewicz, 2018</div>'
	};
};
