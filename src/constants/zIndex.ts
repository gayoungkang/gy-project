/**---------------------------------------------------------------------------/

    * ! css zindex 
    * * Commmon : 컴포넌트끼리 부모, 자식 zindex 처리 (1이상 99 이하)
    
    * ! 하단의 나열된 zindex 사용 시 레이아웃 우선순위가 바뀌므로 common 사용 권장 
    * * NAVIGATON : 네비게이션쪽 처리 (700~)
    * * POPUP : 모달, 알럿 등 레이아웃 최상단 처리 (900~)

/**--------------------------------------------------------------------------*/
export const COMMON_PARENTS_ELEMENT_ZINDEX = 2;
export const COMMON_CHILD_ELEMENT_ZINDEX = 1;

export const NAVIGATON_ZINDEX = 700;
export const NAVIGATON_PARENTS_ELEMENT_ZINDEX = 720;
export const NAVIGATON_CHILD_ELEMENT_ZINDEX = 710;

export const POPUP_ZINDEX = 910;

// Position Element 관련 800
export const POSITION_ZINDEX = 800;
