(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get image path with basePath for production
 * In development, returns the path as-is. In production, adds the basePath prefix.
 */ __turbopack_context__.s([
    "getDataPath",
    ()=>getDataPath,
    "getImgPath",
    ()=>getImgPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getImgPath = (path)=>{
    const basePath = ("TURBOPACK compile-time value", "") || "";
    if ("TURBOPACK compile-time truthy", 1) {
        return path;
    }
    //TURBOPACK unreachable
    ;
};
const getDataPath = (path)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const basePath = window.location.pathname.split("/")[1] || "";
        if (basePath && path.startsWith("/")) {
            return "/".concat(basePath).concat(path);
        }
    }
    const basePath = ("TURBOPACK compile-time value", "") || "";
    if ("TURBOPACK compile-time truthy", 1) {
        return path;
    }
    //TURBOPACK unreachable
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/logo/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])("/images/logo/logo.svg"),
                alt: "logo",
                width: 70,
                height: 70
            }, void 0, false, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/logo/index.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/logo/index.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$app$2f$components$2f$layout$2f$logo$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/logo/index.tsx [app-client] (ecmascript)");
"use client";
;
;
const Header = ()=>{
    const handleDownloadPDF = ()=>{
        window.print();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "navbar top-0 left-0 z-999 w-full absolute",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "py-7",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 sm:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$app$2f$components$2f$layout$2f$logo$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                                lineNumber: 16,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDownloadPDF,
                            className: "relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300",
                                children: "Download PDF Resume"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                                lineNumber: 24,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                            lineNumber: 20,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/layout/header/index.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_hadeel-website_hadeel-farhan_github_io_src_36a3985d._.js.map