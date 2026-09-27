import { LightningElement, api, track } from 'lwc';

// =========================================================================
// 1. CENTRAL POEM DATA STORE (28 POEMS)
// -------------------------------------------------------------------------
// Updating a poem's links here will automatically update it across Textbook,
// Poetry Paraphrasing, and Stanza Questions sections!
// =========================================================================
const POEM_DATA_STORE = {
    "DAFFODILS BY WILLIAM WORDSWORTH": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "STOPPING BY WOODS ON A SNOWY EVENING BY ROBERT FROST": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE ROAD NOT TAKEN BY ROBERT FROST": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "MOWING BY ROBERT FROST": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE EAGLE BY ALFRED, LORD TENNYSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "TRAVEL AND TOURISM BY ROBERT LOUIS STEVENSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "TWO MOTHERS REMEMBERED BY JOANN SNOW DUNCANSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "MOTHER NATURE BY EMILY DICKINSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "HOPE IS THE THING WITH FEATHERS BY EMILY DICKINSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "BLUE BY BRIAN A. HAYCOCK": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "TO THE CUCKOO BY WILLIAM WORDSWORTH": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE OLD WOMAN BY JOSEPH CAMPBELL": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "ABOU BEN ADHEM BY LEIGH HUNT": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "TRY AGAIN BY WILLIAM EDWARD HICKSON": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE RAIN BY W.H. DAVIES": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "PEACE BY DR. SILVIA HARTMANN": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE RAINY DAY BY HENRY WADSWORTH LONGFELLOW": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "IN SPITE OF WAR BY ANGELA MORGAN": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "EQUIPMENT BY EDGAR ALBERT GUEST": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE NORTH SHIP BY PHILIP LARKIN": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE LAKE ISLE OF INNISFREE BY WILLIAM BUTLER YEATS": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THE MAN OF LIFE UPRIGHT BY THOMAS CAMPION": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "BE KIND TO THY FATHER BY A.J. ABBEY": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "DREAMS BY LANGSTON HUGHES": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "NO MEN ARE FOREIGN BY JAMES KIRKUP": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "OPPORTUNITY BY WALTER MALONE": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "THEY HAVE CUT DOWN THE PINES BY MARY LISLE": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    },
    "BE KIND BY MARGARET ANN COURTNEY": {
        "Paraphrasing Notes": "#",
        "Stanza Questions & Answers": "#",
        "Poetic Devices & Theme Summary": "#"
    }
};

// =========================================================================
// 2. CENTRAL PLAY & NOVEL DATA STORES
// =========================================================================
const PLAY_DATA_STORE = {
    "Important Questions & Answers": "#",
    "Character Sketches & Analysis": "#",
    "Theme, Setting & Plot Summary": "#",
    "Dramatic Techniques & Dialogue Analysis": "#"
};

const NOVEL_DATA_STORE = {
    "Chapter-by-Chapter Summaries": "#",
    "Important Long & Short Questions": "#",
    "Character Analysis (Kino, Juana, Coyotito)": "#",
    "Themes, Motifs & Symbolism": "#"
};

function getPoetryCategoryView(subKey) {
    const res = {};
    Object.keys(POEM_DATA_STORE).forEach(poemKey => {
        if (subKey && POEM_DATA_STORE[poemKey][subKey]) {
            res[poemKey] = POEM_DATA_STORE[poemKey][subKey];
        } else {
            res[poemKey] = POEM_DATA_STORE[poemKey];
        }
    });
    return res;
}

// =========================================================================
// 3. MAIN HIERARCHICAL DATABASE WITH CENTRAL REFERENCES
// =========================================================================
const HIERARCHICAL_DATABASE = {
    "Textbook Section": {
        "Class IX": {
            "Unit 1: The Saviour of Mankind": "#",
            "Unit 2: Patriotism": "#",
            "Unit 3: Media and Its Impact": "#",
            "Unit 4: Hazrat Asma (R.A)": "#",
            "Review 1 (Units 1-4)": "#",
            "Unit 5 (Daffodils)": POEM_DATA_STORE["DAFFODILS BY WILLIAM WORDSWORTH"],
            "Unit 6: The Quaid's Vision and Pakistan": "#",
            "Unit 7: Sultan Ahmad Mosque": "#",
            "Unit 8 (Stopping by Woods)": POEM_DATA_STORE["STOPPING BY WOODS ON A SNOWY EVENING BY ROBERT FROST"],
            "Review 2 (Units 5-8)": "#",
            "Unit 9: All is not Lost": "#",
            "Unit 10: Drug Addiction": "#",
            "Unit 11: Noise in the Environment": "#",
            "Unit 12: Three Days to See": "#",
            "Unit 13 (The Road Not Taken)": POEM_DATA_STORE["THE ROAD NOT TAKEN BY ROBERT FROST"],
            "Review 3 (Units 9-13)": "#"
        },
        "Class X": {
            "Unit 1: Hazrat Muhammad (PBUH) An Embodiment of Justice": "#",
            "Unit 2: Chinese New Year": "#",
            "Unit 3 (Try Again)": POEM_DATA_STORE["TRY AGAIN BY WILLIAM EDWARD HICKSON"],
            "Unit 4: First Aid": "#",
            "Unit 5 (The Rain)": POEM_DATA_STORE["THE RAIN BY W.H. DAVIES"],
            "Unit 6: Television vs. Newspapers": "#",
            "Unit 7: Little by Little One Walks Far": "#",
            "Unit 8 (Peace)": POEM_DATA_STORE["PEACE BY DR. SILVIA HARTMANN"],
            "Unit 9: Selecting the Right Career": "#",
            "Unit 10: A World Without Books": "#",
            "Unit 11: Great Expectations": "#",
            "Unit 12: Population Growth and World Food Supplies": "#",
            "Unit 13: Faithfulness": "#"
        },
        "Class XI": {
            "Unit 1: Responsibilities of the Youth": "#",
            "Unit 2: His First Flight": "#",
            "Unit 3: Good Timber": "#",
            "Unit 4: First Year at Harrow": "#",
            "Unit 5: It's Country for Me": "#",
            "Unit 6 (The North Ship)": POEM_DATA_STORE["THE NORTH SHIP BY PHILIP LARKIN"],
            "Unit 7: The Blanket": "#",
            "Unit 8: The Way it Was and Is": "#",
            "Unit 9: The Most Beautiful Flower": "#",
            "Unit 10: The Scholarship Jacket": "#",
            "Unit 11: A Long Walk Home": "#",
            "Unit 12 (The Lake Isle of Innisfree)": POEM_DATA_STORE["THE LAKE ISLE OF INNISFREE BY WILLIAM BUTLER YEATS"],
            "Unit 13: The University Days": "#",
            "Unit 14 (Play: Fourteen)": PLAY_DATA_STORE
        },
        "Class XII": {
            "Unit 1: The Farewell Sermon": "#",
            "Unit 2: Jinnah's Vision of Pakistan": "#",
            "Unit 3: The Wolves of Cernogratz": "#",
            "Unit 4: The Blade of Grass": "#",
            "Unit 5: I Have a Dream": "#",
            "Unit 6: Glory and Hope": "#",
            "Unit 7 (The Rainy Day)": POEM_DATA_STORE["THE RAINY DAY BY HENRY WADSWORTH LONGFELLOW"],
            "Unit 8: Twenty Years On": "#",
            "Unit 9: Once More to the Lake": "#",
            "Unit 10: The Last Lesson": "#",
            "Unit 11: The Man Who Was a Hospital": "#",
            "Unit 12: A Piece of String": "#",
            "Unit 13 (In Spite of War)": POEM_DATA_STORE["IN SPITE OF WAR BY ANGELA MORGAN"],
            "Unit 14: The Reward": "#",
            "Unit 15 (Novel: The Pearl)": NOVEL_DATA_STORE
        }
    },
    "Poetry Section": {
        "All 28 Poems (Full Analysis)": POEM_DATA_STORE,
        "Paraphrasing Notes": getPoetryCategoryView("Paraphrasing Notes"),
        "Stanza-based Questions": getPoetryCategoryView("Stanza Questions & Answers")
    },
    "Play (Fourteen)": PLAY_DATA_STORE,
    "Novel (The Pearl)": NOVEL_DATA_STORE,
    "Grammar & Composition": {
        "Parts of Speech": {
            "Nouns": {
                "Types & Definitions": "#",
                "Rules & Usage in Sentences": "#",
                "Practice Worksheets & Exercises": "#"
            },
            "Pronouns": {
                "Types & Classification": "#",
                "Relative & Demonstrative Rules": "#",
                "Error Detection Practice": "#"
            },
            "Adjectives": {
                "Degrees of Comparison": "#",
                "Order of Adjectives": "#",
                "Rules & Practice Exercises": "#"
            },
            "Verbs": {
                "Transitive & Intransitive Verbs": "#",
                "Modal Auxiliary Verbs": "#",
                "Subject-Verb Agreement Rules": "#"
            },
            "Adverbs": {
                "Types of Adverbs": "#",
                "Formation & Placement Rules": "#",
                "Board Exam Exercises": "#"
            },
            "Prepositions": {
                "Rules & Usage Guides": "#",
                "Prepositions of Time & Place": "#",
                "Common Prepositional Errors": "#"
            },
            "Conjunctions": {
                "Coordinating Conjunctions": "#",
                "Subordinating Conjunctions": "#",
                "Correlative Conjunctions Guide": "#"
            },
            "Interjections": {
                "Definitions & Categories": "#",
                "Punctuation & Usage Rules": "#"
            }
        },
        "Tenses & Grammar Structures": {
            "Tenses (Active Voice)": {
                "All 12 Tenses Formula Chart": "#",
                "Usage Rules & Identification": "#",
                "Solved Practice Worksheets": "#"
            },
            "Tenses (Passive Voice)": {
                "Active to Passive Conversion Rules": "#",
                "Passive of Modal Verbs & Imperatives": "#",
                "Past Board Examination Exercises": "#"
            },
            "Direct & Indirect Speech": {
                "Rules for Assertive Sentences": "#",
                "Rules for Interrogative Sentences": "#",
                "Rules for Imperative & Exclamatory Sentences": "#"
            },
            "Conditional Sentences": {
                "Zero, 1st, 2nd, and 3rd Conditionals": "#",
                "Board Exercises & Solved Notes": "#"
            },
            "Modal Auxiliary Verbs": {
                "Can, Could, May, Might Rules": "#",
                "Must, Should, Ought to Usage": "#"
            },
            "Error Detection & Correction": {
                "Common Sentence Error Rules": "#",
                "Board Practice Exercises": "#"
            }
        },
        "Vocabulary & Phrases": {
            "Idioms & Phrasal Verbs": {
                "Top Important Board Idioms List": "#",
                "Phrasal Verbs with Sentences": "#"
            },
            "Transitional Devices": {
                "Sentence Connectors & Cohesion Guide": "#",
                "Solved Examples & Worksheets": "#"
            },
            "Punctuation & Capitalization": {
                "Standard Punctuation Rules": "#",
                "Capitalization Rules & Practice": "#"
            },
            "Pair of Words": {
                "Commonly Confused Words List": "#",
                "Solved Examples & Meanings": "#"
            }
        },
        "Writing & Composition": {
            "Application Writing": {
                "Standard Formal Formats": "#",
                "Important Solved Applications": "#"
            },
            "Letter to Editor": {
                "Format & Layout Guide": "#",
                "Solved Sample Letters on Social Issues": "#"
            },
            "Job Application & Resume": {
                "Cover Letter & Resume Format": "#",
                "Solved Professional Examples": "#"
            },
            "Report Writing": {
                "Structure & Technical Format": "#",
                "Solved Event & Academic Reports": "#"
            },
            "Dialogue Writing": {
                "Formatting Guidelines & Rules": "#",
                "Solved Dialogue Exercises": "#"
            },
            "Narrative Writing": {
                "Story Writing Outlines": "#",
                "Solved Narrative Examples": "#"
            },
            "Paragraph Writing": {
                "Topic Sentences & Development": "#",
                "Important Solved Paragraphs": "#"
            },
            "Essay Writing": {
                "Essay Outline Structure": "#",
                "Comprehensive Solved Essays": "#"
            }
        }
    }
};

export default class AcademicResourcePortal extends LightningElement {
    @api sheetCsvUrl = '';
    @track currentPath = [];
    @track searchQuery = '';
    @track bookmarkedPaths = [];
    @track showSavedOnly = false;
    @track activeSectionTab = 'All';

    connectedCallback() {
        this.loadSavedBookmarks();
    }

    loadSavedBookmarks() {
        try {
            const saved = localStorage.getItem('lwc_portal_bookmarks');
            if (saved) {
                this.bookmarkedPaths = JSON.parse(saved);
            }
        } catch (e) {
            console.error('Error loading bookmarks', e);
        }
    }

    saveBookmarks() {
        try {
            localStorage.setItem('lwc_portal_bookmarks', JSON.stringify(this.bookmarkedPaths));
        } catch (e) {
            console.error('Error saving bookmarks', e);
        }
    }

    get isRoot() {
        return this.currentPath.length === 0 && !this.showSavedOnly && !this.searchQuery;
    }

    get canGoBack() {
        return this.currentPath.length > 0 || this.showSavedOnly || !!this.searchQuery;
    }

    get currentFolderName() {
        if (this.showSavedOnly) return '⭐ Starred Study Notes';
        if (this.searchQuery) return `Search Results for "${this.searchQuery}"`;
        if (this.currentPath.length === 0) return 'Academic Resource Dashboard';
        return this.currentPath[this.currentPath.length - 1];
    }

    get breadcrumbs() {
        const list = [
            { label: '🏠 Dashboard', path: [], isLast: this.currentPath.length === 0 && !this.showSavedOnly }
        ];

        if (this.showSavedOnly) {
            list.push({ label: '⭐ Starred Notes', path: [], isLast: true });
            return list;
        }

        let acc = [];
        this.currentPath.forEach((name, index) => {
            acc.push(name);
            list.push({
                label: name,
                path: [...acc],
                isLast: index === this.currentPath.length - 1
            });
        });

        return list;
    }

    get currentItems() {
        if (this.showSavedOnly) {
            return this.bookmarkedPaths.map(fullPath => {
                const parts = fullPath.split(' > ');
                const title = parts[parts.length - 1];
                return {
                    id: fullPath,
                    isFolder: false,
                    title: title,
                    pathText: fullPath,
                    link: '#',
                    isStarred: true,
                    starVariant: 'brand'
                };
            });
        }

        if (this.searchQuery && this.searchQuery.trim()) {
            return this.getSearchResults(this.searchQuery.trim().toLowerCase());
        }

        let currentData = HIERARCHICAL_DATABASE;
        for (let key of this.currentPath) {
            if (currentData && currentData[key] !== undefined) {
                currentData = currentData[key];
            } else {
                currentData = null;
                break;
            }
        }

        if (!currentData) return [];

        if (Array.isArray(currentData)) {
            return currentData.map((item, idx) => {
                const fullPath = [...this.currentPath, item].join(' > ');
                const isStarred = this.bookmarkedPaths.includes(fullPath);
                return {
                    id: `${fullPath}_${idx}`,
                    isFolder: false,
                    title: item,
                    pathText: fullPath,
                    link: '#',
                    isStarred: isStarred,
                    starVariant: isStarred ? 'brand' : 'bare'
                };
            });
        }

        if (typeof currentData === 'object') {
            return Object.keys(currentData).map(key => {
                const child = currentData[key];
                if (typeof child === 'string') {
                    const fullPath = [...this.currentPath, key].join(' > ');
                    const isStarred = this.bookmarkedPaths.includes(fullPath);
                    return {
                        id: fullPath,
                        isFolder: false,
                        title: key,
                        pathText: fullPath,
                        link: child,
                        isStarred: isStarred,
                        starVariant: isStarred ? 'brand' : 'bare'
                    };
                }

                return {
                    id: key,
                    isFolder: true,
                    title: key,
                    badge: 'Folder',
                    icon: 'utility:open_folder'
                };
            });
        }

        return [];
    }

    getSearchResults(q) {
        const results = [];
        const search = (obj, path = []) => {
            if (Array.isArray(obj)) {
                obj.forEach(item => {
                    if (item.toLowerCase().includes(q)) {
                        const fullPath = [...path, item].join(' > ');
                        const isStarred = this.bookmarkedPaths.includes(fullPath);
                        results.push({
                            id: fullPath,
                            isFolder: false,
                            title: item,
                            pathText: fullPath,
                            link: '#',
                            isStarred: isStarred,
                            starVariant: isStarred ? 'brand' : 'bare'
                        });
                    }
                });
            } else if (typeof obj === 'object' && obj !== null) {
                Object.keys(obj).forEach(key => {
                    const child = obj[key];
                    if (typeof child === 'string') {
                        if (key.toLowerCase().includes(q)) {
                            const fullPath = [...path, key].join(' > ');
                            const isStarred = this.bookmarkedPaths.includes(fullPath);
                            results.push({
                                id: fullPath,
                                isFolder: false,
                                title: key,
                                pathText: fullPath,
                                link: child,
                                isStarred: isStarred,
                                starVariant: isStarred ? 'brand' : 'bare'
                            });
                        }
                    } else {
                        if (key.toLowerCase().includes(q)) {
                            results.push({
                                id: [...path, key].join(' > '),
                                isFolder: true,
                                title: key,
                                badge: 'Folder',
                                icon: 'utility:open_folder',
                                jumpPath: [...path, key]
                            });
                        }
                        search(child, [...path, key]);
                    }
                });
            }
        };

        search(HIERARCHICAL_DATABASE);
        return results;
    }

    get hasItems() {
        return this.currentItems.length > 0;
    }

    get savedCountText() {
        return `Starred (${this.bookmarkedPaths.length})`;
    }

    handleBreadcrumbClick(event) {
        const pathStr = event.currentTarget.dataset.path;
        this.currentPath = pathStr ? JSON.parse(pathStr) : [];
        this.showSavedOnly = false;
        this.searchQuery = '';
    }

    handleFolderClick(event) {
        const title = event.currentTarget.dataset.title;
        this.currentPath = [...this.currentPath, title];
        this.showSavedOnly = false;
    }

    handleBack() {
        if (this.showSavedOnly || this.searchQuery) {
            this.showSavedOnly = false;
            this.searchQuery = '';
            return;
        }
        if (this.currentPath.length > 0) {
            this.currentPath.pop();
            this.currentPath = [...this.currentPath];
        }
    }

    handleSearchChange(event) {
        this.searchQuery = event.target.value;
        this.showSavedOnly = false;
    }

    handleToggleSavedView() {
        this.showSavedOnly = !this.showSavedOnly;
        this.searchQuery = '';
    }

    handleToggleBookmark(event) {
        const path = event.currentTarget.dataset.path;
        if (!path) return;

        if (this.bookmarkedPaths.includes(path)) {
            this.bookmarkedPaths = this.bookmarkedPaths.filter(p => p !== path);
        } else {
            this.bookmarkedPaths = [...this.bookmarkedPaths, path];
        }
        this.saveBookmarks();
    }

    handleJumpSection(event) {
        const section = event.currentTarget.dataset.section;
        this.activeSectionTab = section;
        this.showSavedOnly = false;
        this.searchQuery = '';

        if (section === 'All') {
            this.currentPath = [];
        } else {
            this.currentPath = [section];
        }
    }
}
