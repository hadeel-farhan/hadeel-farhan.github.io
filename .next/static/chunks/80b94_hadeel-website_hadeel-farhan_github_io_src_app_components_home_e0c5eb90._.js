(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Contact = ()=>{
    var _contactData_socialLinks, _contactData_contactInfo;
    _s();
    const [contactData, setContactData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        number: "",
        email: "",
        message: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const fetchData = {
                "Contact.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataPath"])("/data/page-data.json"));
                        if (!res.ok) throw new Error("Failed to fetch");
                        const data = await res.json();
                        setContactData(data === null || data === void 0 ? void 0 : data.contactLinks);
                    } catch (error) {
                        console.error("Error fetching services:", error);
                    }
                }
            }["Contact.useEffect.fetchData"];
            fetchData();
        }
    }["Contact.useEffect"], []);
    const reset = ()=>{
        formData.name = "";
        formData.number = "";
        formData.email = "";
        formData.message = "";
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                number: formData.number,
                email: formData.email,
                message: formData.message
            })
        }).then((response)=>response.json()).then((data)=>{
            setSubmitted(data.success);
            reset();
        }).catch((error)=>{
            console.log(error.message);
        });
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "no-print",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-16 md:pt-32 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Contact Me"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-orange-500",
                                children: "( 05 )"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-7 sm:gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "name",
                                                            className: "label",
                                                            children: "Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            className: "input",
                                                            id: "name",
                                                            name: "name",
                                                            value: formData.name,
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "number",
                                                            className: "label",
                                                            children: "Phone *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            className: "input",
                                                            id: "number",
                                                            type: "number",
                                                            name: "number",
                                                            value: formData.number,
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "label",
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "input",
                                                    id: "email",
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "label",
                                                    children: "Message *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    required: true,
                                                    className: "input",
                                                    name: "message",
                                                    id: "message",
                                                    value: formData.message,
                                                    onChange: handleChange,
                                                    rows: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])("/images/icon/success-icon.svg"),
                                                    alt: "success-icon",
                                                    width: 30,
                                                    height: 30
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-secondary",
                                                    children: "Great!!! Email has been Successfully Sent. We will get in touch asap."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300",
                                                children: "Send Now"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6",
                                        children: contactData === null || contactData === void 0 ? void 0 : (_contactData_socialLinks = contactData.socialLinks) === null || _contactData_socialLinks === void 0 ? void 0 : _contactData_socialLinks.map((value, index)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-base sm:text-lg font-normal text-secondary hover:text-primary",
                                                    onClick: (e)=>e.preventDefault(),
                                                    href: "#!",
                                                    children: value === null || value === void 0 ? void 0 : value.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-5 lg:gap-11 items-end",
                                        children: contactData === null || contactData === void 0 ? void 0 : (_contactData_contactInfo = contactData.contactInfo) === null || _contactData_contactInfo === void 0 ? void 0 : _contactData_contactInfo.map((value, index)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: (e)=>e.preventDefault(),
                                                    href: "#!",
                                                    className: "text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary",
                                                    children: value === null || value === void 0 ? void 0 : value.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/contact/index.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "DheSyMDz+OKztO1li5FgPGvF0hM=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EducationSkills = ()=>{
    var _educationData_education, _educationData_skills;
    _s();
    const [educationData, setEductionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationSkills.useEffect": ()=>{
            const fetchData = {
                "EducationSkills.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataPath"])("/data/page-data.json"));
                        if (!res.ok) throw new Error("Failed to fetch");
                        const data = await res.json();
                        setEductionData(data === null || data === void 0 ? void 0 : data.educationData);
                    } catch (error) {
                        console.error("Error fetching services:", error);
                    }
                }
            }["EducationSkills.useEffect.fetchData"];
            fetchData();
        }
    }["EducationSkills.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-softGray overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])("/images/home/education-skill/edu-skill-vector.svg"),
                        alt: "vector",
                        width: 260,
                        height: 170,
                        className: "no-print absolute top-0 left-0 transform -translate-y-1/2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 py-16 md:py-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Education & Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-orange-500",
                                        children: "( 03 )"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row items-center gap-10 xl:gap-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full lg:max-w-md flex flex-col gap-0 xl:gap-8",
                                        children: educationData === null || educationData === void 0 ? void 0 : (_educationData_education = educationData.education) === null || _educationData_education === void 0 ? void 0 : _educationData_education.map((value, index)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: value === null || value === void 0 ? void 0 : value.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-normal",
                                                                children: value === null || value === void 0 ? void 0 : value.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                lineNumber: 52,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full",
                                        children: educationData === null || educationData === void 0 ? void 0 : (_educationData_skills = educationData.skills) === null || _educationData_skills === void 0 ? void 0 : _educationData_skills.map((value, index)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])(value === null || value === void 0 ? void 0 : value.icon),
                                                                alt: "icon",
                                                                width: 70,
                                                                height: 70
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-black font-normal",
                                                                children: value === null || value === void 0 ? void 0 : value.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "9",
                                                                height: "9",
                                                                viewBox: "0 0 9 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "9",
                                                                    height: "9",
                                                                    rx: "4.5",
                                                                    fill: i < (value === null || value === void 0 ? void 0 : value.rating) ? "#FE4300" : "#C0D8E0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, i, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/education-skills/index.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EducationSkills, "PUm1YIi6L4R6LExktc+eOHGWSns=");
_c = EducationSkills;
const __TURBOPACK__default__export__ = EducationSkills;
var _c;
__turbopack_context__.k.register(_c, "EducationSkills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ContactBar = ()=>{
    var _contactBarData_contactItems, _contactBarData_socialItems;
    _s();
    const [contactBarData, setContactBarData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactBar.useEffect": ()=>{
            const fetchData = {
                "ContactBar.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataPath"])("/data/page-data.json"));
                        if (!res.ok) throw new Error("Failed to fetch");
                        const data = await res.json();
                        setContactBarData(data === null || data === void 0 ? void 0 : data.contactBar);
                    } catch (error) {
                        console.error("Error fetching services:", error);
                    }
                }
            }["ContactBar.useEffect.fetchData"];
            fetchData();
        }
    }["ContactBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-softGray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11",
                            children: contactBarData === null || contactBarData === void 0 ? void 0 : (_contactBarData_contactItems = contactBarData.contactItems) === null || _contactBarData_contactItems === void 0 ? void 0 : _contactBarData_contactItems.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: (e)=>e.preventDefault(),
                                    href: "#!",
                                    className: "flex items-center gap-2 lg:gap-4 text-sm md:text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])(value === null || value === void 0 ? void 0 : value.icon),
                                            alt: value === null || value === void 0 ? void 0 : value.type,
                                            width: 24,
                                            height: 24,
                                            className: "min-w-[24px] min-h-[24px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                                            lineNumber: 40,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "text-sm md:text-base xl:text-xl hover:text-primary",
                                            children: value === null || value === void 0 ? void 0 : value.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                                    lineNumber: 34,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center md:justify-end gap-4 md:gap-2.5",
                            children: contactBarData === null || contactBarData === void 0 ? void 0 : (_contactBarData_socialItems = contactBarData.socialItems) === null || _contactBarData_socialItems === void 0 ? void 0 : _contactBarData_socialItems.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: (e)=>e.preventDefault(),
                                    href: "#!",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])(value === null || value === void 0 ? void 0 : value.icon),
                                        alt: value === null || value === void 0 ? void 0 : value.platform,
                                        width: 30,
                                        height: 30,
                                        className: "hover:opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/hero-section/contact-bar/index.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactBar, "PeT+DHOMCTYR9C0BFc7lyYQFKZ4=");
_c = ContactBar;
const __TURBOPACK__default__export__ = ContactBar;
var _c;
__turbopack_context__.k.register(_c, "ContactBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/utils/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hadeel-website/hadeel-farhan.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LatestWork = ()=>{
    _s();
    const [workData, setWorkData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LatestWork.useEffect": ()=>{
            const fetchData = {
                "LatestWork.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataPath"])("/data/work-data.json"));
                        if (!res.ok) throw new Error("Failed to fetch");
                        const data = await res.json();
                        setWorkData(data === null || data === void 0 ? void 0 : data.workData);
                    } catch (error) {
                        console.error("Error fetching services:", error);
                    }
                }
            }["LatestWork.useEffect.fetchData"];
            fetchData();
        }
    }["LatestWork.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-softGray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 xl:py-32 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Latest Works"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-orange-500",
                                    children: "( 04 )"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12",
                            children: workData === null || workData === void 0 ? void 0 : workData.map((value, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex flex-col gap-3 xl:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])(value === null || value === void 0 ? void 0 : value.image),
                                                    alt: "image",
                                                    width: 570,
                                                    height: 414,
                                                    className: "rounded-lg w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: (e)=>e.preventDefault(),
                                                    href: "#!",
                                                    className: "absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex justify-center items-center p-5 w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "65",
                                                            height: "64",
                                                            viewBox: "0 0 65 64",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "0.333374",
                                                                    width: "64",
                                                                    height: "64",
                                                                    rx: "32",
                                                                    fill: "#FE4300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666",
                                                                    stroke: "#FFFF",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                            lineNumber: 41,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0 xl:gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "".concat(value.slug),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: value === null || value === void 0 ? void 0 : value.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImgPath"])("/images/icon/right-arrow-icon.svg"),
                                                            alt: "right-arrow-icon",
                                                            width: 30,
                                                            height: 30
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hadeel$2d$website$2f$hadeel$2d$farhan$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Client: ",
                                                        value === null || value === void 0 ? void 0 : value.client
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hadeel-website/hadeel-farhan.github.io/src/app/components/home/latest-work/index.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LatestWork, "sjUdWDEKq/GOuRpedmV6si1+sgk=");
_c = LatestWork;
const __TURBOPACK__default__export__ = LatestWork;
var _c;
__turbopack_context__.k.register(_c, "LatestWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_hadeel-website_hadeel-farhan_github_io_src_app_components_home_e0c5eb90._.js.map