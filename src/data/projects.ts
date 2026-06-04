// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "lx-n-music-mobile-pro",
		title: "LX-N-Music-Mobile-Pro",
		description:
			"一款基于 React Native 开发的免费开源第三方 LX Music 音乐播放器，支持 Android 5 及以上版本。",
		image: "/images/projects/lx-n-music-mobile-pro.png",
		category: "mobile",
		techStack: ["React Native", "Redux"],
		status: "completed",
		sourceCode: "https://github.com/WalnutBai/lx-n-music-mobile-pro",
		startDate: "2025-06-01",
		tags: ["Music Player", "LX Music", "Open Source"],
	},
	{
		id: "lyricprovider",
		title: "LyricProvider",
		description:
			"基于 Xposed 框架的歌词提供者模块，专为 LX Music 软件优化。",
		image: "/images/projects/lyricprovider.jpg",
		category: "mobile",
		techStack: ["Xposed", "Android", "Java"],
		status: "completed",
		sourceCode: "https://github.com/WalnutBai/LyricProvider",
		startDate: "2025-08-01",
		tags: ["Lyric", "Xposed", "LX Music"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
