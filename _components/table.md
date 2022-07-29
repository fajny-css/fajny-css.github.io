---
title: table
order: 29
intro: Tables can be a good way to display informations to the user.
import: table
items:
    - title: Bordered
      demo: |-
        <table class="table" data-table-style="bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Facebook</th>
                    <th>Twitter</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="#">Anna</a></td>
                    <td>Fali</td>
                    <td>Anna Fali</td>
                    <td>@anna.fali</td>
                </tr>
            
                <tr>
                    <td>2</td>
                    <td><a href="#">Niek</a></td>
                    <td>Bove</td>
                    <td>Niek Bove</td>
                    <td>@niek.bove</td>
                </tr>
            
                <tr>
                    <td>3</td>
                    <td><a href="#">Lacara</a></td>
                    <td>Jones</td>
                    <td>Lacara Jones</td>
                    <td>@lacara.jones</td>
                </tr>
            
                <tr>
                    <td>4</td>
                    <td><a href="#">Pablo</a></td>
                    <td>Cambeiro</td>
                    <td>Pablo Cambeiro</td>
                    <td>@pablo.cambeiro</td>
                </tr>
            
                <tr>
                    <td>5</td>
                    <td><a href="#">Irene</a></td>
                    <td>Sotelo</td>
                    <td>Irene Sotelo</td>
                    <td>@irene.sotelo</td>
                </tr>
            </tbody>
        </table>
      code: |-
        <table class="table" data-table-style="bordered">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>Content</td>
                </tr>
            </tbody>
        </table>
    - title: Stripped
      demo: |-
        <table class="table" data-table-style="stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Facebook</th>
                    <th>Twitter</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="#">Anna</a></td>
                    <td>Fali</td>
                    <td>Anna Fali</td>
                    <td>@anna.fali</td>
                </tr>
            
                <tr>
                    <td>2</td>
                    <td><a href="#">Niek</a></td>
                    <td>Bove</td>
                    <td>Niek Bove</td>
                    <td>@niek.bove</td>
                </tr>
            
                <tr>
                    <td>3</td>
                    <td><a href="#">Lacara</a></td>
                    <td>Jones</td>
                    <td>Lacara Jones</td>
                    <td>@lacara.jones</td>
                </tr>
            
                <tr>
                    <td>4</td>
                    <td><a href="#">Pablo</a></td>
                    <td>Cambeiro</td>
                    <td>Pablo Cambeiro</td>
                    <td>@pablo.cambeiro</td>
                </tr>
            
                <tr>
                    <td>5</td>
                    <td><a href="#">Irene</a></td>
                    <td>Sotelo</td>
                    <td>Irene Sotelo</td>
                    <td>@irene.sotelo</td>
                </tr>
            </tbody>
        </table>
      code: |-
        <table class="table" data-table-style="stripped">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>Content</td>
                </tr>
            </tbody>
        </table>
attributes:
    - name: data-table-style
      example: stripped
      possible: '"bordered" | "stripped"'
      default: bordered
      required: "No"
---
