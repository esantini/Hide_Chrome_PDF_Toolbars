//  Show/Hide PDF Toolbars

window.toggleToolbars = (() => {

	const toolbar = document.getElementById("toolbar");
	const zToolbar = document.getElementById("zoom-toolbar");

	toolbar.style.display = "none",
	zToolbar.style.display = "none";

	return () => {
		toolbar.style.display = toolbar.style.display ? "" : "none";
		zToolbar.style.display = zToolbar.style.display ? "" : "none";
	};
})();
