# For example:
# solution(4) returns 2: 4 -> 2 -> 1
# solution(15) returns 5: 15 -> 16 -> 8 -> 4 -> 2 -> 1

def solution(n):
    n = int(n)
    memo = {}
    def min_operations(target):
        if target == 1:
            return 0
        if target in memo:
            return memo[target]
        if target % 2 == 0:
            memo[target] = 1 + min_operations(target // 2)
        else:
            memo[target] = 1 + min(min_operations(target + 1), min_operations(target-1))
        return memo[target]
    return str(min_operations(n))

print(solution(4))
print(solution(15))
