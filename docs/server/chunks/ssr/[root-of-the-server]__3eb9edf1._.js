module.exports = [
"[project]/.next-internal/server/app/recipes/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/apple-icon.png.mjs { IMAGE => \"[project]/app/apple-icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/apple-icon.png.mjs { IMAGE => \"[project]/app/apple-icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/utils/fs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILENAMES",
    ()=>FILENAMES,
    "MEAL_METADATA",
    ()=>MEAL_METADATA,
    "getCategoryMeta",
    ()=>getCategoryMeta,
    "getSlugs",
    ()=>getSlugs
]);
const MEAL_METADATA = {
    breakfast: {
        slug: 'breakfast',
        title: 'Breakfast',
        description: 'Oats, yogurt bowls & breakfast ideas.',
        emoji: '🍳',
        gradient: 'from-amber-500/20 via-orange-500/10 to-amber-500/5',
        borderColor: 'border-amber-500/30'
    },
    lunch: {
        slug: 'lunch',
        title: 'Lunch',
        description: 'Mediterranean, Mexican, and Asian grain bowls & salads.',
        emoji: '🥗',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
        borderColor: 'border-emerald-500/30'
    },
    dinner: {
        slug: 'dinner',
        title: 'Dinner',
        description: 'Stir-fries, pastas, curries & dinners.',
        emoji: '🍲',
        gradient: 'from-indigo-500/20 via-purple-500/10 to-indigo-500/5',
        borderColor: 'border-indigo-500/30'
    },
    snacks: {
        slug: 'snacks',
        title: 'Snacks',
        description: 'Fruits, protein shakes & snacks.',
        emoji: '🍎',
        gradient: 'from-rose-500/20 via-pink-500/10 to-rose-500/5',
        borderColor: 'border-rose-500/30'
    },
    takeout: {
        slug: 'takeout',
        title: 'Takeout',
        description: 'Takeout & dining out options.',
        emoji: '🍱',
        gradient: 'from-sky-500/20 via-blue-500/10 to-sky-500/5',
        borderColor: 'border-sky-500/30'
    }
};
const FILENAMES = [
    'breakfast',
    'lunch',
    'dinner',
    'snacks',
    'takeout'
];
const getSlugs = ()=>{
    return FILENAMES.map((filename)=>{
        return {
            slug: filename
        };
    });
};
const getCategoryMeta = (slug)=>{
    return MEAL_METADATA[slug] || {
        slug,
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: 'Recipes and meal options.',
        emoji: '🍽️',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
        borderColor: 'border-emerald-500/30'
    };
};
}),
"[project]/app/recipes/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "dynamicParams",
    ()=>dynamicParams,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/fs.tsx [app-rsc] (ecmascript)");
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    const { default: Post } = await __turbopack_context__.f({
        "@/content/breakfast.mdx": {
            id: ()=>"[project]/content/breakfast.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/content/breakfast.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/content/dinner.mdx": {
            id: ()=>"[project]/content/dinner.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/content/dinner.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/content/lunch.mdx": {
            id: ()=>"[project]/content/lunch.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/content/lunch.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/content/snacks.mdx": {
            id: ()=>"[project]/content/snacks.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/content/snacks.mdx.tsx [app-rsc] (ecmascript, async loader)")
        },
        "@/content/takeout.mdx": {
            id: ()=>"[project]/content/takeout.mdx.tsx [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/content/takeout.mdx.tsx [app-rsc] (ecmascript, async loader)")
        }
    }).import(`@/content/${slug}.mdx`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fadeIn max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-xs group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 transition-transform group-hover:-translate-x-1",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/app/recipes/[slug]/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/recipes/[slug]/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "All Categories"
                        }, void 0, false, {
                            fileName: "[project]/app/recipes/[slug]/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/recipes/[slug]/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/recipes/[slug]/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Post, {}, void 0, false, {
                    fileName: "[project]/app/recipes/[slug]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/recipes/[slug]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/recipes/[slug]/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSlugs"])();
}
const dynamicParams = false;
}),
"[project]/app/recipes/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/recipes/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3eb9edf1._.js.map