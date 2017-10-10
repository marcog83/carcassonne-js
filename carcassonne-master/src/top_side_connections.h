/**
 * @file top_side_connections.h
 * @author Jonathan Rowlands <j.growl1983@gmail.com>
 * 
 * @section LICENSE
 * 
 *      This file is part of carcassone.
 *
 * carcassonne is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * carcassonne is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with carcassonne.  If not, see <http://www.gnu.org/licenses/>.
 */
#ifndef CARCASSONNE_TOP_SIDE_CONNECTIONS_H_
#define CARCASSONNE_TOP_SIDE_CONNECTIONS_H_

#include <string>
#include <vector>

#include "side_connections.h"

namespace carcassonne
{

class TopSideConnections : public SideConnections
{
 public:
 	TopSideConnections();
 	                     
	TopSideConnections(const TopSideConnections&);
	TopSideConnections& operator=(const TopSideConnections&);
	
	virtual void CopyFrom(const TopSideConnections&);
	virtual SideConnections* Clone() const;

  virtual std::vector<std::string> ToStringVector() const;

  virtual ~TopSideConnections();

};

}

#endif /*CARCASSONNE_TOP_SIDE_CONNECTIONS_H_*/
