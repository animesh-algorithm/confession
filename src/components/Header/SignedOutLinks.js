import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignedOutLinks = () => {
  return (
    <Navbar id="basic-navbar-nav" className="right">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>
            <i className="fas fa-home"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/explore">
          <Nav.Link>
            <i className="fas fa-compass"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signin">
          <Nav.Link>
            <i className="fas fa-sign-in-alt"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Nav.Link>
            <i className="fas fa-user-plus"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/account">
          <Nav.Link>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD////09PT7+/v8/Pz39/fs7Oyzs7PW1tavr69OTk6Li4vc3Nzk5OTV1dXR0dHGxsbu7u5sbGyfn59XV1e7u7tgYGBHR0coKCiVlZXBwcE8PDx8fHwYGBiZmZnLy8uFhYU9PT13d3c0NDRvb2+np6cPDw8fHx9bW1skJCQXFxcuLi5mZmYKR+VUAAAOMElEQVR4nO1d54KyuhYVFJFmR8QGdmf0/Z/vmgYhCQh+umHOZf2ZomIWSXbfodNp0aJFixYtWrRo0aJFixYtWrRo0aJFixbAuB6DxfSwcZx4szkt7P217gF9BNfgFFrm2O1rShju2Dwfgr/IdWmfZqtRDi8ZXXc8OwXbukddEttpGHl6WW48Jp65sese/itszEn3HXIpjNGssSzts/dv5FKM42XdbCQEn6NHMNw0Sv6chp+lh2H4Qd28GKalZWZVRPu6uSEE7rf4IZiXuvl1Zt/k94T+qJng6MsEn9jVSvDDAlQNq0aCX92CKWa1ETRhCGratCaCDyiCml4Tw6+pQRn1bMUYjqCm1cLwLQ/pXdQhbKaQBGvZiQC6nge8OF32YBmuwBmCypkndHB3EXiRatoCmODvBJohtEqcQxPUPGCGO3CGGrAvHMEzBHaFQQ0agjMowSU8QW0EyvBQA8MeKEOrBoYaqM7P0ff6pD8x3qdguJG1c8LZaqDUtqCmqWyUDqzp/r69dC7Xe3Cw3rB4BjsuvXbZ7+QgVwhI8Cp8d1/+8oVVRdz2Q1nb2aJGgrRqshEa3VG/61B2Jt2T+gKL7DwOv0dIQsh/sZ8vAeZlMjb9gv2Viaj3v8AkD3wYcVP4ztPLtVq8uxbcO3VAuy2NBBtz9Pd64Zz91cpyHnKyaFXIbyClQo/zzc40/bOzOOJLp2K1B5iJSr61az/lXkgIe6No6HlDX1x0Rb6yKDxOq4Hrjv0xuaLrPGftmFK8QfHrXJOl93RLN/SPmLy2tGfj82/m7bfcgIewQmee+aBzSo0m/bkH9snbcwTSF2Czr9xxi9DkKEX+D//+Y44VcMhcdebF6R8+e090SaN6cQcKTFkMOpdBOl7PSbPSD8/kOR6VBRoZGXXy0gldxpyamAQJXbig6YZ+YyBm1/qrpIjC6sbcJxaaDF6LXqLoTn8NnGF2yns35qtxy+TLoOrQV2UuehGdyZs25j4im+o+9+rciMkvl5kqGXKgwioC4pdskl1ONMqnesvTj8lHltI65QotLJ1OYF5sZEU+DWfUvLLGdBr5MzkaA/E9ySu/A+rb/ryygFwwhuJoZdA95qRRTl94x4S9EHRpeMJ+GaCEC7eVSG5TofBIBKY472wOYy0mv5TI9MAZpmVSoyOyGYMuFfGSSiQGis/82jJVKxOo+sxrKc/PIwrxrq8Q17N8CxB/j1lixdYrhfGTO6bP4l4u7cQkab9nhqrw6tDxE4lasi7unj+oj+JYbjiJpVwgerFn0vkpW5ZzLBjVJ7Evy5AZnrkUiSm9L53lgXKfgtIMtZh8ImeOiCVql68qhirHrJJ3IsvwV0mCGGG3CleDqo9WmdF5oCpMpeyM3FdyAZUlrTQo6hMphCm2BTby/wsA5QJXSlpQ28WWXuhXJ/gi6vU5KAMvnjk72fvj2j7tzIzNQ20aSeNFEkFjtVvcsSm0nIe+yqzICcx+HI74xb0oG4/o3HccSfIvaWlbwmIYiXGmuSlZelBxfdGLs1SKeJNoCOo6iIbQqnPi/nJVQuQq2npQYYyskTzJU1IbOgVdEtgQ3SeNW4bGIecax6wbA5UGztzZIq80JGqQJOALJHDRwDNVulCBGp5hcWDhukoZbvP4DYptMT7C4xe+83PgvrP/KpVw6CV6Osdvfrm3OCkMxTDdUfprYz9IGI6VBEv0GqRyGZhh/1wq7bxjTpQykDYu/jDBibWNQRUoEoZlgyYOY6g0hcrq8MAywBmWLb1OAhXK0v5e6XzS9rSaQOW5/Qq3/3fEPKg8N+nlUrcd57SHLWrzy26huz1Da4t6dXlupWkfj+vAtueLxfR0OGxiJ9zNzqa/Go/H0ciltlB/tAqnUB4wjYvJYv6yXAe36XOM4cxcuV6fGjVBMcOn1VPWy4dKXFCGtEDhctqd/fGgrxtGt6uKwvXWrxiWRinJ+zGGyFyzZ9HryGLv+DGGULKUMLSWfrkYGbW8/xJDYpzoZQvYjMvHGELZNGrzK59h588xrFgBzbJMf4hhxeZmlvWrEhitmeG62rCYePgAQ7BShWrtv8wyqBJIzgFYMbsUbCtE/DmGYAU1cmFFEZgx+YG2Yah4qSJuVgT2oQ+0ZELFvKtkEFN1mAmPvok5GMMqKjHxBz7QowGV5e5USpImEr5iFkYBuIqhTsnaCYwknP3vXaeQ7QidY+k24DX7SDUdo0APqlCBoKzpNkkiLOHrNxcDtnmt9MEtacfZvzZlQjYjYJSsqomTD/zjaUSwzdwRSraU2ldcOaFc+FWJIOzBXzqWHyWOpzHW6Yf+6TQbHfjUrwFRTS9VhseX2pVXMDIm0OcNhHR/FS+8blZ/ycGPsV1yXofPbf+rGMf3cGSSregwOlewsWRL7znD8zK1qhb6RuDzIj1mq1xCyZPqu9HKN2QTS1YvMbrAy8LLLvqmobYWr/ddhJyUfMzOlmVa5/PZmdps3iZSpaQqy61by1eKVcder/062/xhoCbS3GVzfJh66lKwt+UY67c07OOfzcjr63RR9PS+a7E2HB/W6kYYqAPQx6kz9vAQWfb6wUzvHNfCS/1pkg3/Xc8f09NjkTld2IA/C+vpKPTQEPbE7f6JPK8/0Y3UHmcBhwkzJ/Pk7iapeTNmeXXcJ0j3nuLHIHGhCzX4JZFI59BMHMQ8deh2tmn+ozvyZ4f5eplsugXe2BFceXAKnyoMd4D/lBx4sg/RHqPrK1eg/Ci6G3RqsN+xCH26ahNpAF8Hiu/GHSRVSUGQKPR13BuBNDoNAeYR1GJVhJlGtwcauswOLtrNo08mcUvVxo84RmzQoNo15wXDgWJ2aUbOIZG6CWRzZQqHTuKQCgFJVq4pLaIu9rkMVSCE7j18+1AYEp4fGT2KFB6YayramMgdQD+J1KgUS6S7MCJiagAcg0qAytvQHtO1mPxDbKvonXEFHHmxSpSmR6xslI47EWlVzwmmd40Eh0KtS/+j7tojSq5KDIOel/Tcn+jKaG3AxqASIA2HlEI/MWCUOs/Dy7SCh0+dLjTrT01z7aKW6nqAk7onJGNYql4dT3PRq+XP7KGKAXfIrcnkw2VkBCAdiHLYgzTQd1StVCQuSjNk5q5FpvAySas54HGjw1/yRtVCzp+ipSwYPdYyx8ZhSYCA3r1Qq0fdU2Ayc7Rl+IO4puI8YsnBi5rJ0424Kr17h780cja4wrg6gCcRKeWxFvP/tzMJRio51ha1sLsWdowUBy24ScjwQNYoDrLWowwp8CQ+JemlL9zoi5OsQq68cjl1wk2yoMVOIS9ta/rVCbGtcAF4kPqKPTKweuJauofRZOKdC7qTF1x6xxjzPSXPNaD/kJ/w0fwssB2D7vZc61bvnWPPVfDMU+ZGHMj2JrMM7vtmQQqd4g42PN9QW7bDDhMSLopjH0MN/lRPCTgK2kMK6+lcrF4FxOIy1YULJp2wu5LXMASGPZ7EMR2QXtwDGTIbrggoV0w0YLcJU8giZZgZGtu4IKCCa4a8F+F5ZGgPkt+gTy1VgZy/RwoQsYuU++AUmhkvnJUAKRkSlMFbvC6bOwNirJB1RbxAUzmPv8yIydfgWzxtJMRDQleNeJTOhZgqRB3SgouRQkunmZmcgvTtDpcd94INEq5het9qR8wvPlZTMrGEAibesVIFsO8WLat+nJHThPzrGp0KAcRAo+ZnGpHSTU5MZNMWsXCFXyex1l0X3yyXu2T9IGq/R/NOmQq9ge8s5ra97vzeNk6IWmHG0XAw5AtHjouz4IzM6YZugKZgGGe2l6qQdKzwgO63g3MeeZKL4TO/A7BQ7xXuyb3HCFSNCvrQ3DlTm+ws27FcPadKFZ2zE/F3rBEgGiPxAq7/8hwoh4qrbrOeaUl0XSoZ3i+86DMjorbwkxokDMPVLcXvPstyyrlkjQLJPXGKblupVDqBywyjxj2rkwob5urNH8vO3X/jbO+gs+4J96opIIV5TP65Wm/09Ow2VR9u6dPVUNdTugoxoXOAgcW9YR4710OVNinjStdordGnPBBbhgZOWYmXhyTiPvRdZXuphA1d7fBPBioFMlnEFuWK2EYOcYG2x31gz2+LxWJ6yKlnG1B7FOxwvYpYslF2xCI2T6ojuT1UzVNHajrE0EMvCyJscFBRzJYaYgGsfHAUCi3v8c/GqcIUXjI+KQUlCkfFMVAu88MAG0eqYpFMorwGs4eYqMyBOV0EjfEKVcADRztRTiNmJlHVIeTTldvgNfrEBVujttLy5nbiRdXnzsz3xjyrWg08OWNlCxAXvFbVKYa0XAW6b6QysBBdqx6XFKdvUsywTjswayhgqwgc9rVUooabQ4Uhd+4Qdwvu+QdvA9mV3auiuoSriFUwHBFF0UCXQgZap6Zc5cWfvJJbmFFzNrQkUImPNpe6fnmPNrfpGfoxjm8Cj18MYmRjn3kn8tc04spQVUZlc9XqZdpIt1cNWRvo2ayhyu5uqNubAyleKkZ3VZG4P7NGEaT2y8SaZs++kAk2X9dnIBbMxuwFalcr/N8GZSlKQXCBkwA2LRmWGf4JXc9DqFpLypjpcpUYNiiTVhZZ/0E8S07ahw33mZTI9IyKbq0YxGhYGqYcLvw6FXvNBW0B95yjjyITqsiuQqEZ8Y8pihS8aZMNLwkhgL+4CTH4cEzWqMmadbUX570P7hC6rFWdqfFudPTwFTgvgxc1mW3451R9Fmnkl3efDv8dgpxW5JlwEe96erY+iiSTyP0vtdlqLuL+DOiEcY9GTx4J3f+zaiILKm7SenUmaHJrbf8c1jhen/p/JNQWNa6e5F9w2ay8lNDiuT5nDU4SfgCHplTGtmjRokWLFi1atGjRokWLFi1atGjRosX/Ef4HCW7EngvOEM0AAAAASUVORK5CYII="
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginTop: "-7px",
              }}
            />
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default SignedOutLinks;
