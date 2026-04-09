interface SidebarItem {
  text: string;
  link: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string; // SVG 경로 혹은 프로필 이미지 URL
  isProfile?: boolean; // 프로필 이미지(원형) 여부
}

export interface ISidebarSection {
        title?: string;
        lists: SidebarItem[];
    }
export interface ISubscription {
        id: string;
        name: string;
        profileImage: string;
    }