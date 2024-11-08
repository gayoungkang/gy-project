import Button from "@components/button/Button";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

/**---------------------------------------------------------------------------/

  * ! Navigation

  * * 메인 네비게이션

/**--------------------------------------------------------------------------*/
const Navigation = () => {
  const router = useRouter();
  return (
    <nav>
      <StyledNavList>
        <li>
          <Button
            variant='text'
            label='혜택'
            onClick={() =>
              router.push({
                pathname: "/benefit",
              })
            }
          />
        </li>
        <li>
          <Button
            variant='text'
            label='금융'
            onClick={() =>
              router.push({
                pathname: "/finance",
              })
            }
          />
        </li>
        <li>
          <Button
            variant='text'
            label='자산'
            onClick={() =>
              router.push({
                pathname: "/property",
              })
            }
          />
        </li>
        <li>
          <Button
            variant='text'
            label='앱카드'
            endIcon={
              <svg
                clipRule='evenodd'
                fillRule='evenodd'
                strokeLinejoin='round'
                strokeMiterlimit='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
              >
                <path
                  d='m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z'
                  fillRule='nonzero'
                />
              </svg>
            }
          />
        </li>
      </StyledNavList>
    </nav>
  );
};
export default Navigation;

const StyledNavList = styled.ul`
  display: flex;
  button {
    color: ${({ theme }) => theme.color.text.primary};
    :last-child {
      padding-right: 0;
    }
  }
`;
