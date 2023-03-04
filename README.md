```shell
# 1.
pnpm install

# I set tsconfig.json (moduleResolution to nodenext)
# open index.ts we can see:

# Module '"element-plus"' has no exported member 'ElMessage'. Did you mean to use 'import ElMessage from "element-plus"' instead?ts


# 2. replace by new exports content
pnpm replace

# the error will remove

# 3.

pnpm restore

# the error will show again

```
