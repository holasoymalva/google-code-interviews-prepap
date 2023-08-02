# You're so close to destroying the LAMBCHOP doomsday device you can taste it! But in order to do so, 
# you need to deploy special self-replicating bombs designed for you by the brightest scientists on Bunny Planet.
#  There are two types: Mach bombs (M) and Facula bombs (F). 
#  The bombs, once released into the LAMBCHOP's inner workings, will automatically deploy to all the strategic 
#  points you've identified and destroy them at the same time.
# But there's a few catches. First, the bombs self-replicate vi


def solution(M,F):
    M = int(M)
    F = int(F)

    def min_generation(m,f):
        if m == 1 and f ==1:
            return 0
        if m <= 0 or f <= 0:
            return float('inf')
        if m > f:
            return min_generation(m-f,f) + 1
        return min_generation(m, f-m) + 1
    
    generations = min_generation(M,F)
    return str(generations) if generations != float('inf') else "impossible"

# Test Case
print(solution(2,1))
print(solution(2,4))
print(solution(4,7))
print(solution(1,1))
